import { createButton } from '../components/button.js'
import { getData } from '..//utils/dataUtils.js'
import { fillSelectList } from './features/__usersEditWindow.js'

export function initEditCardModalWindow (cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const arrayUsers = boardObjects[0].usersArray

  const modalOverlay = document.createElement('div')
  modalOverlay.className = 'modal-edit_overlay'

  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-edit_container'
  modalOverlay.append(modalContainer)

  const modalTitle = document.createElement('input')
  modalTitle.className = 'modal-edit_title'
  modalTitle.placeholder = 'Title'
  modalTitle.type = 'text'

  const modalDescription = document.createElement('textarea')
  modalDescription.className = 'modal-edit_description'
  modalDescription.placeholder = 'Description'
  modalDescription.type = 'text'

  const select = document.createElement('select')
  select.id = 'select'
  select.className = 'users-edit__select'

  fillSelectList(arrayUsers)

  const modalButtons = document.createElement('div')
  modalButtons.className = 'modal-edit_buttons'

  const modalFooter = document.createElement('div')
  modalFooter.className = 'modal-edit_footer'

  modalButtons.append(createButton('modal-edit-cancel', 'modal-edit_cancel-btn', 'Cancel', 'button', 'Cancel action'),
    createButton('modal-edit-confirm', 'modal-edit_confirm-btn', 'Confirm', 'submit', 'Confirm action'))

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
