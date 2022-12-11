import { BLOG_TITLE } from '~/constants/title'
import { createSignal, Match, onMount, Switch, Show } from 'solid-js'
import { sleep } from '~/utils/sleep'

type Status = 'pending' | 'loading' | 'done' | 'finished'
export default function Home() {
  const [code, setCode] = createSignal('')
  const [status, setStatus] = createSignal<Status>('pending')
  const TYPED_CODE = `cd ${BLOG_TITLE}`

  onMount(async () => {
    for (const s of TYPED_CODE) {
      setCode(code() + s)
      await sleep(200)
    }
    setStatus('loading')
    await sleep(3000)
    setStatus('done')
    await sleep(500)
    setStatus('finished')
  })

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Show
        keyed={false}
        when={status() !== 'finished'}
        fallback={
          <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
        }
      >
        <div class="mockup-code text-left">
          <Switch>
            <Match when={status() === 'pending'} keyed={false}>
              <pre data-prefix="$">
                <code>{code()}</code>
              </pre>
            </Match>
            <Match when={status() === 'loading'} keyed={false}>
              <pre data-prefix=">" class="text-green-500">
                <code>Loading...</code>
              </pre>
            </Match>
            <Match when={status() === 'done'} keyed={false}>
              <pre data-prefix=">">
                <code>Done!</code>
              </pre>
            </Match>
          </Switch>
        </div>
      </Show>
    </main>
  )
}
