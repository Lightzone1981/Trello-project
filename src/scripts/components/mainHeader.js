import { createClock } from '../components/clock.js'
import logoUrl from '../../assets/images/logo.svg'
import { createBoardsSwitcher } from '../components/boardsSwitcher.js'

// верстка главного header
export function createMainHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'
  header.id = 'main-header'

  const boardSwitcherWrapper = document.createElement('div')
  boardSwitcherWrapper.className = 'boards-switcher-wrapper'

  const boardSwitcherTitle = document.createElement('p')
  boardSwitcherTitle.className = 'boards-switcher-title'
  boardSwitcherTitle.innerText = 'let\'s start working!'

  boardSwitcherWrapper.append(createBoardsSwitcher(), boardSwitcherTitle)

  header.append(boardSwitcherWrapper)
  const logoImg = document.createElement('img')
  logoImg.className = 'main-header__logo'
  logoImg.id = 'main-header-logo'
  logoImg.src = logoUrl
  logoImg.alt = 'Trollo-lo Logo'

  header.append(logoImg, createClock())

  return header
}
