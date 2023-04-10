const dateParse = (date: number) => {
  const n = new Date(date)
  return n.toLocaleString()
}

export default dateParse
