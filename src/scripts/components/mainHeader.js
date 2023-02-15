import { createClock } from '../components/clock.js'
import logoUrl from '../../assets/images/logo.svg'
import { createBoardsSwitcher } from '../components/boardsSwitcher.js'

// верстка главного header
export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'
  header.id = 'main-header'
  header.append(createBoardsSwitcher())
  const logoImg = document.createElement('img')
  logoImg.className = 'main-header__logo'
  logoImg.src = logoUrl
  logoImg.alt = 'Trollo-lo Logo'

  header.append(logoImg, createClock())

  return header
}
