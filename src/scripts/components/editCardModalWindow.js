import { createButton } from './button.js'
import { getData } from '../utils/dataUtils.js'
import { fillSelectList } from '../utils/fillSelectList.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export function initEditCardModalWindow (cardId) {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()

  const arrayCards = boardsArray[activeBoardIndex].tasksArray
  const arrayUsers = boardsArray[activeBoardIndex].usersArray

  const modalOverlay = document.createElement('div')
  modalOverlay.className = 'modal-overlay'

  const modalContainer = document.createElement('form')
  modalContainer.className = 'modal-edit__container'
  modalContainer.style.borderColor = getActiveBoardColor('normal')

  modalOverlay.append(modalContainer)

  const modalMessage = document.createElement('h2')
  modalMessage.classList = 'modal-edit__message'
  if (cardId !== 'new') {
    modalMessage.innerText = 'Changing task information'
  } else {
    modalMessage.innerText = 'Create new task'
  }
  modalContainer.append(modalMessage)

  const cardInfo = document.createElement('div')
  cardInfo.className = 'modal-edit__card-info'
  modalContainer.append(cardInfo)

  const modalTitle = document.createElement('input')
  modalTitle.className = 'modal-edit__title'
  modalTitle.type = 'text'
  modalTitle.placeholder = 'Task title'
  modalTitle.maxLength = 50

  const modalDescription = document.createElement('textarea')
  modalDescription.className = 'modal-edit__description'
  modalDescription.placeholder = 'Task description'
  modalDescription.maxLength = 500

  const userSelect = document.createElement('select')
  userSelect.id = 'select'
  userSelect.className = 'users-edit__select'

  cardInfo.append(modalTitle, modalDescription, userSelect)

  const modalFooter = document.createElement('div')
  modalFooter.className = 'modal-edit__footer'

  modalFooter.append(createButton('modal-edit-confirm', 'modal-button', 'Save', 'submit', 'Save changes', 'fill'), createButton('modal-edit-cancel', 'modal-button', 'Cancel', 'button', 'Cancel changes', 'fill'))

  modalContainer.append(cardInfo, modalFooter)

  const root = document.querySelector('#root')
  root.prepend(modalOverlay)
  document.body.style.overflow = 'hidden'

  if (cardId !== 'new') {
    arrayCards.forEach(item => {
      if (item.id === cardId) {
        modalTitle.value = item.title
        modalDescription.innerText = item.description
        fillSelectList(arrayUsers, userSelect, item.user)
      }
    })
  } else {
    fillSelectList(arrayUsers, userSelect, 'empty')
  }
}
