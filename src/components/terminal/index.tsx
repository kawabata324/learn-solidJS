import { Match, Switch } from 'solid-js'
import terminal from '~/store/terminal'

export default function Terminal() {
  const { status, code } = terminal

  return (
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
  )
}
