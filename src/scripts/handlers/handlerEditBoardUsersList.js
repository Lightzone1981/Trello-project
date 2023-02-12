import { getData, setData } from '../utils/dataUtils.js'
import { getAllUsers } from '../utils/getAllUsers.js'

import { createUsersEditWindow } from '../components/usersEditWindow.js'
import { getDomElements } from '../utils/getDomElements.js'
import { fillUserContainer } from '../utils/fillUserContainer.js'
import { fillSelectList } from '../utils/fillSelectList.js'
import { renderAllData } from '../renderers/renderAllData.js'

function createSelectList (allUsers, newUsersArray) {
  const selectUsersArray = []
  allUsers.forEach((element) => {
    if (JSON.stringify(newUsersArray).indexOf(JSON.stringify(element)) === -1) selectUsersArray.push(element)
  })
  return selectUsersArray
}

export const handlerEditBoardUsersList = () => {
  createUsersEditWindow()

  const domElements = getDomElements()
  const allUsers = getAllUsers()
  const boardsArray = getData()
  const boardUsersArray = boardsArray[0].usersArray

  const newUsersArray = boardUsersArray

  fillUserContainer(newUsersArray, domElements.userEditContainer)
  fillSelectList(createSelectList(allUsers, newUsersArray), domElements.newUserSelect)

  // вешаем слушателя на окно редактирования пользователей
  domElements.usersEditWrapper.addEventListener('click', (event) => {
    // событие нажатия кнопки "cancel" в окне редактирования пользователей
    if (event.target.id === 'user-edit-cancel-button') {
      domElements.usersEditWrapper.remove()
    }
    // событие нажатия кнопки "save" в окне редактирования пользователей
    if (event.target.id === 'user-edit-save-button') {
      boardsArray[0].usersArray = newUsersArray
      setData(boardsArray)
      domElements.usersEditWrapper.remove()
      renderAllData(domElements)
    }
  })
}
