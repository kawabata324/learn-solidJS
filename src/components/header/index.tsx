import daisyUITheme from '~/store/theme'
import GitHubIcon from '~/components/icons/GitHubIcon'
import MoonIcon from '~/components/icons/MoonIcon'
import SunIcon from '~/components/icons/SunIcon'

export default function Header() {
  const { changeDarkTheme, changeWhiteTheme, isDarkMode } = daisyUITheme
  // Todo any型を修正
  const switchDarkMode = (event: any) => {
    const isLightMode: boolean = event.target.checked
    isLightMode ? changeWhiteTheme() : changeDarkTheme()
  }
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Kawabata Tech Blog</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <GitHubIcon fillColor={isDarkMode() ? '#fff' : '#000'} />
          </li>
          <li>
            <label class="swap swap-rotate">
              <input type="checkbox" onChange={(e) => switchDarkMode(e)} />
              <MoonIcon class="swap-on" />
              <SunIcon class="swap-off" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
