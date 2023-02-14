import { createBoardSettingsWindow } from '../components/boardSettingsWindow.js'
import { getDomElements } from '../utils/getDomElements.js'

export const handlerChangeBoardSettings = () => {
  createBoardSettingsWindow()
  const domElements = getDomElements()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.boardSettingsWrapper.remove()
    }
  }, true)
}

// createBoardSettingsWindow()

// const domElements = getDomElements()
// const allUsers = getAllUsers()
// const boardsArray = getData()
// const activeBoardIndex = getActiveBoardIndex()
// const boardUsersArray = boardsArray[activeBoardIndex].usersArray

// const newUsersArray = boardUsersArray

// domElements.boardSettingsTitle.placeholder = `${boardsArray[activeBoardIndex].title}
