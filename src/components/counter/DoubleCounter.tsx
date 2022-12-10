import { Accessor, Setter } from 'solid-js'
import BaseCounter from '~/components/counter/BaseCounter'

type Props = {
  count: Accessor<number>
  setCount: Setter<number>
}
export default function DoubleCounter(props: Props) {
  const countPlusTwo = () => props.setCount(props.count() + 2)
  return <BaseCounter label="+2" setCount={countPlusTwo} />
}
