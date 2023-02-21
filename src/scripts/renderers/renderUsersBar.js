import { clear } from '../utils/clearComponent.js'
import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getDomElements } from '../utils/getDomElements'

export const renderUsersBar = () => {
  const boardsArray = getData()
  const activeBoard = boardsArray[getActiveBoardIndex()]

  const usersBar = document.createElement('div')
  usersBar.classList = 'users-bar'
  activeBoard.forEach(element => {
    const newUser = document.createElement('img')
    newUser.classList = 'users-bar__image'
    newUser.src = element.src
    newUser.alt = 'user photo'
    usersBar.append(newUser)
  })
  const userButton = document.createElement('button')
  userButton.classList = 'users-bar__button'
  userButton.type = 'button'
  usersBar.append(userButton)

  const domElements = getDomElements()
  clear(domElements.usersBarWrapper)
  domElements.usersBarWrapper.append(usersBar)
}
