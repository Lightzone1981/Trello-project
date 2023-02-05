import { createClock } from '.src/scripts/components/clock.js'
//Создает главный Header logo+clock
export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'

  const imgLogo = document.createElement('img')
  imgLogo.className = 'main-header__logo'
  imgLogo.src = 'src/assets/icons/images/trello.png'

  const usersClockHeader = document.createElement('div')
  usersClockHeader.className = 'main-header__clock'

  const clock = document.createElement('div')
  clock.className = 'clock'
  const clockInfo = document.createElement('p')
  clockInfo.id = 'time'
  clockInfo.className = 'clock__info'
  clock.append(clockInfo)

  usersClockHeader.append(users, clock)
  header.append(imgLogo, usersClockHeader)

  clockInfo.append(createClock())

  return header
}
