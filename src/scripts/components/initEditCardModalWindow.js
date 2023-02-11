import { createButton } from '../components/button.js'
import { getData } from '..//utils/dataUtils.js'
import { fillSelectList } from '../utils/fillSelectList.js'

export function initEditCardModalWindow (cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const arrayUsers = boardObjects[0].usersArray

  const modalOverlay = document.createElement('div')
  modalOverlay.className = 'modal-edit__overlay'

  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-edit__container'
  modalOverlay.append(modalContainer)

  const modalTitle = document.createElement('input')
  modalTitle.className = 'modal-edit__title'
  modalTitle.placeholder = 'Title'
  modalTitle.type = 'text'

  const modalDescription = document.createElement('textarea')
  modalDescription.className = 'modal-edit__description'
  modalDescription.placeholder = 'Description'
  modalDescription.maxLength = 500

  const select = document.createElement('select')
  select.id = 'select'
  select.className = 'users-edit__select'

  fillSelectList(arrayUsers,select)

  const modalButtons = document.createElement('div')
  modalButtons.className = 'modal-edit__buttons'

  const modalFooter = document.createElement('div')
  modalFooter.className = 'modal-edit__footer'

  modalButtons.append(createButton('modal-edit-cancel', 'modal-edit__cancel-btn', 'Cancel', 'button', 'Cancel action'),
    createButton('modal-edit-confirm', 'modal-edit__confirm-btn', 'Confirm', 'submit', 'Confirm action'))

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
  root.prepend(modalOverlay)
}
