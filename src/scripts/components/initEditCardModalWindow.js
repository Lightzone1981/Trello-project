import { createButton } from '../components/button.js'
import { getData } from '..//utils/dataUtils.js'
import { fillSelectList } from './features/_usersEditWindow.js'

export function initEditCardModalWindow (cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const arrayUsers = boardObjects[0].usersArray

  const modalOverlay = document.createElement('div')
  modalOverlay.className = 'modalOverlay'

  const modalContainer = document.createElement('div')
  modalContainer.className = 'modalContainer'
  modalOverlay.append(modalContainer)

  const modalTitle = document.createElement('input')
  modalTitle.className = 'modalTitle'
  modalTitle.placeholder = 'Title'
  modalTitle.type = 'text'

  const modalDescription = document.createElement('textarea')
  modalDescription.className = 'modalDescription'
  modalDescription.placeholder = 'Description'
  modalDescription.type = 'text'

  const select = document.createElement('select')
  select.id = 'select'
  select.className = 'users-edit__select'

  fillSelectList(arrayUsers)

  const modalButtons = document.createElement('div')
  modalButtons.className = 'modalButtons'

  const modalFooter = document.createElement('div')
  modalFooter.className = 'modalFooter'

  modalButtons.append(createButton('cancel-modal', 'cancelBtn', 'Cancel', 'button', 'Cancel action'),
    createButton('confirm-modal', 'confirmBtn', 'Confirm', 'submit', 'Confirm action'))

  modalFooter.append(select, modalButtons)

  modalContainer.append(modalTitle, modalDescription, modalFooter)

  arrayCards.forEach(item => {
    if (item.id === cardId) {
      modalTitle.innerText(item.title)
      modalDescription.innerText(item.description)
      select.innerText(item.user)
    }
  })
  const root = document.querySelector('#root')
  root.append(modalOverlay)
}
