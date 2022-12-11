export const sleep = (ms: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(resolve, ms)
  })
}
