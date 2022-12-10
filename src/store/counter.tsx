import { createRoot, createSignal } from 'solid-js'

function createCounter() {
  const [count, setCount] = createSignal(0)
  const countPlusOne = () => setCount(count() + 1)
  const countPlusTwo = () => setCount(count() + 2)
  return { count, setCount, countPlusOne, countPlusTwo }
}

export default createRoot(createCounter)
