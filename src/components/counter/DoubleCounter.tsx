import BaseCounter from '~/components/counter/BaseCounter'
import counter from '~/store/counter'

export default function DoubleCounter() {
  const { countPlusTwo } = counter
  return <BaseCounter label="+2" setCount={countPlusTwo} />
}
