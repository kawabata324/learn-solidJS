import { createSignal, createRoot } from 'solid-js'

type Theme = 'dracula' | 'lofi'

function createDaisyUITheme() {
  const [theme, setTheme] = createSignal<Theme>('dracula')
  const changeDarkTheme = () => setTheme('dracula')
  const changeWhiteTheme = () => setTheme('lofi')
  const isDarkMode = () => theme() === 'dracula'
  return { theme, setTheme, changeDarkTheme, changeWhiteTheme, isDarkMode }
}

export default createRoot(createDaisyUITheme)
