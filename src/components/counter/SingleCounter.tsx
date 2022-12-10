import { createSignal } from 'solid-js'
import BaseCounter from '~/components/counter/BaseCounter'

export default function SingleCounter() {
  const [count, setCount] = createSignal(0)
  const countPlusOne = () => setCount(count() + 1)
  return <BaseCounter label="+1" count={count} setCount={countPlusOne} />
}
