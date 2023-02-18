import { getData, setData } from '../utils/dataUtils.js'
import { getAllUsers } from '../utils/getAllUsers.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { createUsersEditWindow } from '../components/usersEditWindow.js'
import { getDomElements } from '../utils/getDomElements.js'
import { fillUserContainer } from '../utils/fillUserContainer.js'
import { fillSelectList } from '../utils/fillSelectList.js'
import { resetCardUsers } from '../utils/resetCardUsers.js'
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
  const activeBoardIndex = getActiveBoardIndex()
  const boardUsersArray = boardsArray[activeBoardIndex].usersArray

  const newUsersArray = boardUsersArray

  domElements.usersEditHeader.innerText = `${boardsArray[activeBoardIndex].title}  |  users`
  fillUserContainer(newUsersArray, domElements.userEditContainer)
  fillSelectList(createSelectList(allUsers, newUsersArray), domElements.newUserSelect, 'empty')

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.usersEditWrapper.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  // вешаем слушателя на окно редактирования пользователей
  domElements.usersEditWrapper.addEventListener('click', (event) => {
    // событие нажатия кнопки "add to project"
    if (event.target.id === 'user-edit-select-button') {
      event.preventDefault()

      allUsers.forEach((item) => {
        if (`${domElements.newUserSelect.value}` === `${item.id}`) {
          newUsersArray.push(item)
          fillSelectList(createSelectList(allUsers, newUsersArray), domElements.newUserSelect)
          fillUserContainer(newUsersArray, domElements.userEditContainer)
        }
      })
    }

    if (event.target.id.indexOf('delete-user-button') !== -1) {
      const idNum = event.target.id.split('-').at(-1)
      const cardIndex = newUsersArray.reduce((res, item, index) => {
        if (`${item.id}` === `${idNum}`) {
          res = index
        }
        return res
      }, 0)
      newUsersArray.splice(cardIndex, 1)
      fillSelectList(createSelectList(allUsers, newUsersArray), domElements.newUserSelect)
      fillUserContainer(newUsersArray, domElements.userEditContainer)
    }

    // событие нажатия кнопки "cancel"
    if (event.target.id === 'user-edit-cancel-button') {
      document.body.style.overflow = 'auto'
      domElements.usersEditWrapper.remove()
    }

    // событие нажатия кнопки "save"
    if (event.target.id === 'user-edit-save-button') {
      boardsArray[activeBoardIndex].usersArray = newUsersArray
      boardsArray[activeBoardIndex].todoTasks = resetCardUsers(newUsersArray, boardsArray[activeBoardIndex].todoTasks)
      boardsArray[activeBoardIndex].progressTasks = resetCardUsers(newUsersArray, boardsArray[activeBoardIndex].progressTasks)
      setData(boardsArray)
      domElements.usersEditWrapper.remove()
      document.body.style.overflow = 'auto'
      renderAllData()
    }
  })
}
