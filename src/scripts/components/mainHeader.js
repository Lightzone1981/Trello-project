import { createClock } from '../components/clock'

// верстка главного header
export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'

  const imgLogo = document.createElement('img')
  imgLogo.className = 'main-header__logo'
  imgLogo.src = 'src/assets/icons/images/trello.png'

  const clock = document.createElement('div')
  clock.className = 'clock'
  const clockInfo = document.createElement('p')
  clockInfo.id = 'time'
  clockInfo.className = 'clock__info'
  clock.append(clockInfo)
  clockInfo.append(createClock())

  header.append(imgLogo, clock)

  return header
}
