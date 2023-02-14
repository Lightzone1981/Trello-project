
import { createButton } from './button.js'

export function initConfirmModalWindow (message) {
  const modalOverlayConfirm = document.createElement('div')
  modalOverlayConfirm.className = 'modal-edit__overlay'

  const modalContainerConfirm = document.createElement('div')
  modalContainerConfirm.className = 'modal-edit__container'
  modalOverlayConfirm.append(modalContainerConfirm)

  const modalHeaderConfirm = document.createElement('div')
  modalHeaderConfirm.className = 'modal-edit__header'

  const modalMessage = document.createElement('h2')
  modalMessage.className = 'modal-confirm__message'
  modalMessage.innerText = `${message}`

  const modalButtonsConfirm = document.createElement('div')
  modalButtonsConfirm.className = 'modal-confirm__buttons'

  modalButtonsConfirm.append(createButton('modal-confirm-cancel', 'modal-edit__cancel-btn', 'Cancel', 'button', 'Cancel action'),
    createButton('modal-confirm-confirm', 'modal-edit__confirm-btn', 'Confirm', 'button', 'Confirm action'))
  modalHeaderConfirm.append(modalMessage)
  modalContainerConfirm.append(modalHeaderConfirm, modalButtonsConfirm)

  const root = document.querySelector('#root')
  root.append(modalOverlayConfirm)
  document.body.style.overflow = 'hidden'
}
