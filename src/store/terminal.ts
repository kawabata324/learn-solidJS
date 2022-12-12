import { BLOG_TITLE } from '~/constants/title'
import { createSignal, createRoot } from 'solid-js'
import { sleep } from '~/utils/sleep'

type Status = 'pending' | 'loading' | 'done' | 'finished'

function createTerminal() {
  const [code, setCode] = createSignal('')
  const [status, setStatus] = createSignal<Status>('pending')
  const TYPED_CODE = `cd ${BLOG_TITLE}`

  const runCode = async () => {
    for (const s of TYPED_CODE) {
      setCode(code() + s)
      await sleep(200)
    }
    setStatus('loading')
    await sleep(3000)
    setStatus('done')
    await sleep(500)
    setStatus('finished')
  }

  return { code, status, setCode, setStatus, runCode }
}

export default createRoot(createTerminal)
