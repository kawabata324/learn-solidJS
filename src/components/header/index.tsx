import daisyUITheme from '~/store/theme'
import GitHubIcon from '~/components/icons/GitHubIcon'
import MoonIcon from '~/components/icons/MoonIcon'
import SunIcon from '~/components/icons/SunIcon'
import { BLOG_TITLE } from '~/constants/title'
import { A } from 'solid-start'

export default function Header() {
  const { isDarkMode, switchTheme } = daisyUITheme
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <A href="/" class="btn btn-ghost normal-case text-xl">
          {BLOG_TITLE}
        </A>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <GitHubIcon fillColor={isDarkMode() ? '#fff' : '#000'} />
          </li>
          <li>
            <label class="swap swap-rotate">
              <input type="checkbox" onChange={() => switchTheme()} />
              <MoonIcon class="swap-on" />
              <SunIcon class="swap-off" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
