import { createClock } from '../components/clock'
import logoUrl from '../../assets/images/logo.svg'

// верстка главного header
export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'

  const logoImg = document.createElement('img')
  logoImg.className = 'main-header__logo'
  logoImg.src = logoUrl
  logoImg.alt = 'Trollo-lo Logo'

  header.append(logoImg, createClock())

  return header
}
