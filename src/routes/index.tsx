import { onMount, Show } from 'solid-js'
import terminal from '~/store/terminal'
import Terminal from '~/components/terminal'

export default function Home() {
  const { status, runCode } = terminal

  onMount(async () => {
    await runCode()
  })

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Show keyed={false} when={status() === 'finished'} fallback={<Terminal />}>
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
      </Show>
    </main>
  )
}
