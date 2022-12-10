import BaseCounter from '~/components/counter/BaseCounter'
import counter from '~/store/counter'

export default function SingleCounter() {
  const { countPlusOne } = counter
  return <BaseCounter label="+1" setCount={countPlusOne} />
}
