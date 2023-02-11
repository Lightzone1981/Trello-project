
import { createButton } from '../components/button.js'

export function initConfirmModalWindow (message) {
  const modalOverlayConfirm = document.createElement('div')
  modalOverlayConfirm.className = 'modal-edit_overlay'

  const modalContainerConfirm = document.createElement('div')
  modalContainerConfirm.className = 'modal-edit_container'
  modalOverlayConfirm.append(modalContainerConfirm)

  const modalHeaderConfirm = document.createElement('div')
  modalHeaderConfirm.className = 'modal-edit_header'

  const modalMessage = document.createElement('h2')
  modalMessage.className = 'modal-confirm_Message'
  modalMessage.innerText = `${message}`

  const modalButtonsConfirm = document.createElement('div')
  modalButtonsConfirm.className = 'modal-confirm_buttons'

  modalButtonsConfirm.append(createButton('modal-confirm-cancel', 'modal-edit_cancel-btn', 'Cancel', 'button', 'Cancel action'),
    createButton('modal-confirm-confirm', 'modal-edit_confirm-btn', 'Confirm', 'button', 'Confirm action'))
  modalHeaderConfirm.append(modalMessage)
  modalContainerConfirm.append(modalHeaderConfirm, modalButtonsConfirm)

  const root = document.querySelector('#root')
  root.append(modalOverlayConfirm)
}
