function mergeSort(
  unsortedArray: Record<number | string, any>,
  sortingParameter: string,
  sortDir = 'ASC'
): any {
  if (unsortedArray.length <= 1) {
    return unsortedArray
  }

  const middle = Math.floor(unsortedArray.length / 2)

  const left = unsortedArray.slice(0, middle)
  const right = unsortedArray.slice(middle)

  return merge(
    mergeSort(left, sortingParameter, sortDir),
    mergeSort(right, sortingParameter, sortDir),
    sortingParameter,
    sortDir
  )
}

/* eslint-disable */
function merge(
  left: Record<number | string, any>,
  right: Record<number | string, any>,
  sortingParameter: string,
  sortingDir = 'ASC'
) {
  let resultArray,
    leftIndex = 0,
    rightIndex = 0

  resultArray = []

  if (sortingParameter) {
    while (leftIndex < left.length && rightIndex < right.length) {
      let comparison =
        left[leftIndex][sortingParameter] < right[rightIndex][sortingParameter]
      if (sortingDir !== 'DESC')
        comparison =
          left[leftIndex][sortingParameter] >=
          right[rightIndex][sortingParameter]
      if (comparison) {
        resultArray.push(left[leftIndex])
        leftIndex++
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++
      }
    }
  } else {
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex])
        leftIndex++
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++
      }
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}

export default mergeSort
