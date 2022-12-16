import theme from '~/store/theme'

export default function About() {
  const { isDarkMode } = theme
  return (
    <main class={isDarkMode() ? 'text-white' : 'text-gray-900'}>
      <div class="h-96 w-full bg-cover bg-coffee-img bg-blend-lighten bg-[#00fff] opacity-80 flex justify-center items-center">
        <h1 class="text-white text-4xl font-bold hover:animate-bounce">About me</h1>
      </div>
      <div class="mt-5 flex justify-end">
        <div>
          <a class="text-blue-600" href="https://pixabay.com/ja/">
            Pixabay
          </a>
          からのFree画像
        </div>
      </div>
    </main>
  )
}
