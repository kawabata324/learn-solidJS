import { Accessor, Setter } from 'solid-js'
import BaseCounter from '~/components/counter/BaseCounter'

type Props = {
  count: Accessor<number>
  setCount: Setter<number>
}

export default function SingleCounter(props: Props) {
  const countPlusOne = () => props.setCount(props.count() + 1)
  return <BaseCounter label="+1" setCount={countPlusOne} />
}
