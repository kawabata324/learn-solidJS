import { onMount, Show } from 'solid-js'
import terminal from '~/store/terminal'
import Terminal from '~/components/terminal'
import theme from '~/store/theme'
import ProfileCard from '~/components/card/ProfileCard'

export default function Home() {
  const { status, runCode } = terminal
  const { isDarkMode } = theme

  onMount(async () => {
    await runCode()
  })

  return (
    <main class={`text-center mx-auto p-4 ${isDarkMode() ? 'text-white' : 'text-gray-700'}`}>
      <Show keyed={false} when={status() === 'finished'} fallback={<Terminal />}>
        <ProfileCard />
      </Show>
    </main>
  )
}
