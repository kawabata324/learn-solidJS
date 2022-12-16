import { A } from 'solid-start'

export default function ProfileCard() {
  return (
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
  )
}
