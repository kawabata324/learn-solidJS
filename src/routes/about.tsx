import { A } from 'solid-start'
import SingleCounter from '~/components/counter/SingleCounter'
import DoubleCounter from '~/components/counter/DoubleCounter'
import counter from '~/store/counter'

export default function About() {
  const { count } = counter
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">About Page</h1>
      <p class="text-lg my-4 text-blue-700l">{count()}</p>
      <SingleCounter />
      <DoubleCounter />
      <p class="mt-8">
        Visit{' '}
        <A href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">
          solidjs.com
        </A>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {' - '}
        <span>About Page</span>
      </p>
    </main>
  )
}
