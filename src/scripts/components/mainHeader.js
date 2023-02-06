import { createClock } from '../components/clock'

// верстка главного header
export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'

  const logoImg = document.createElement('img')
  logoImg.className = 'main-header__logo'
  logoImg.src = 'logo.svg'
  logoImg.alt = 'Trollo-lo Logo'

  header.append(logoImg, createClock())

  return header
}
