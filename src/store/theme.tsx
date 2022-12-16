import { createSignal, createRoot } from 'solid-js'

type Theme = 'dracula' | 'lofi'

function createDaisyUITheme() {
  const [theme, setTheme] = createSignal<Theme>('dracula')
  const changeDarkTheme = () => setTheme('dracula')
  const changeWhiteTheme = () => setTheme('lofi')
  const isDarkMode = () => theme() === 'dracula'
  const switchTheme = () => {
    isDarkMode() ? changeWhiteTheme() : changeDarkTheme()
  }
  return { theme, isDarkMode, switchTheme }
}

export default createRoot(createDaisyUITheme)
