import { onMount, Show } from 'solid-js'
import terminal from '~/store/terminal'
import Terminal from '~/components/terminal'
import theme from '~/store/theme'
import { A } from 'solid-start'

export default function Home() {
  const { status, runCode } = terminal
  const { isDarkMode } = theme

  onMount(async () => {
    await runCode()
  })

  return (
    <main class={`text-center mx-auto p-4 ${isDarkMode() ? 'text-white' : 'text-gray-700'}`}>
      <Show keyed={false} when={status() === 'finished'} fallback={<Terminal />}>
        <div class="card w-3/5 card-side glass mx-auto">
          <div class="card-body items-center text-center text-xl">
            <h1 class="card-title text-4xl">Hi, I'm Kawabata👋</h1>
            <p class="mt-2">
              Thank you for reading <br />
              Make yourself at home ☕️{' '}
            </p>
            <div class="flex gap-4">
              <A href="/about">
                <button class="btn btn-primary">About me</button>
              </A>
              <button class="btn btn-primary">ブログを読む</button>
            </div>
          </div>
          {/*Todo スマホ対応する*/}
          <figure class="w-96">
            <img src="../../public/usa.jpg" alt="Album" />
          </figure>
        </div>
      </Show>
    </main>
  )
}
