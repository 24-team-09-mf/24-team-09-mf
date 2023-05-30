import { useState, useEffect } from 'react'
import mergeSort from '@/utils/mergeSort'
import { LeaderboardElementProps } from './leaderboard-types'

const useLeaderboard = ({ data }: { data: LeaderboardElementProps[] }) => {
  const [search, setSearch] = useState('')
  const [nameSort, setNameSort] = useState('ASC')
  const [positionSort, setPositionSort] = useState('DESC')
  const [sortData, setSortData] = useState(data)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    let filteredData = [...data]
    if (search !== '') {
      filteredData = data.filter(el => el.name.indexOf(search) !== -1)
      setNoResults(filteredData.length === 0)
    }
    const sortedData = mergeSort(filteredData, 'position', 'DESC')
    setSortData(sortedData)
    setPositionSort('ASC')
  }, [data, search])

  useEffect(() => {
    setSortData(prevSortData => {
      const sortedData = mergeSort(prevSortData, 'name', nameSort)
      return sortedData
    })
  }, [nameSort])

  useEffect(() => {
    setSortData(prevSortData => {
      const sortedData = mergeSort(prevSortData, 'position', positionSort)
      return sortedData
    })
  }, [positionSort])

  const dataWithPositions = data.map((el, index) => ({
    ...el,
    position: index + 1,
  }))

  const sortedData = sortData.map(el => {
    const position = dataWithPositions.find(e => e.name === el.name)?.position
    return { ...el, position }
  })

  return {
    search,
    setSearch,
    nameSort,
    setNameSort,
    positionSort,
    setPositionSort,
    sortedData,
    noResults,
  }
}

export default useLeaderboard
