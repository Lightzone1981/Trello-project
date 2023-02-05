import { createClock } from '.src/scripts/components/clock.js'

export function createHeader () {
  const header = document.createElement('header')
  header.className = 'main-header container'

  const imgLogo = document.createElement('img')
  imgLogo.className = 'main-header__logo'
  imgLogo.src = 'src/assets/icons/images/trello.png'

  const usersClockHeader = document.createElement('div')
  usersClockHeader.className = 'main-header__users-clock'

  const users = document.createElement('ul')
  users.className = 'users-clock__users'

  const usersIcons = document.createElement('li')
  usersIcons.className = 'users__icon'
  usersIcons.id = 'user'
  users.append(usersIcons)

  const imgUsersIcon = document.createElement('img')
  imgUsersIcon.className = 'users__icon-img'
  imgUsersIcon.src = 'img/user.png'
  usersIcons.append(imgUsersIcon)

  const clock = document.createElement('div')
  clock.className = 'users-clock__clock'
  const clockInfo = document.createElement('p')
  clockInfo.id = 'time'
  clockInfo.className = 'clock__info'
  clock.append(clockInfo)

  usersClockHeader.append(users, clock)
  header.append(imgLogo, usersClockHeader)

  clockInfo.append(createClock())

  return header
}
