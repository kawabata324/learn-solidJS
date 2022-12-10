import { createSignal } from 'solid-js'
import BaseCounter from '~/components/counter/BaseCounter'

export default function DoubleCounter() {
  const [count, setCount] = createSignal(0)
  const countPlusTwo = () => setCount(count() + 2)
  return <BaseCounter label="+2" count={count} setCount={countPlusTwo} />
}
