export const parse2D = (data: number[], size: number) => {
  const rows: number[][] = []
  for (let i = 0; i < data.length; i += size) {
    rows.push(data.slice(i, i + size))
  }
  return rows
}
