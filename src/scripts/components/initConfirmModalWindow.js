
import { createButton } from '../components/button.js'

export function initConfirmModalWindow (message) {
  const modalOverlayConfirm = document.createElement('div')
  modalOverlayConfirm.className = 'modalOverlay'

  const modalContainerConfirm = document.createElement('div')
  modalContainerConfirm.className = 'modalContainer'
  modalOverlayConfirm.append(modalContainerConfirm)

  const modalHeaderConfirm = document.createElement('div')
  modalHeaderConfirm.className = 'modalHeader'

  const modalMessage = document.createElement('h2')
  modalMessage.className = 'modalMessage'
  modalMessage.innerText = `${message}`

  const modalButtonsConfirm = document.createElement('div')
  modalButtonsConfirm.className = 'modalButtons'

  modalHeaderConfirm.append(modalMessage)
  modalButtonsConfirm.append(createButton('cancel-modal', 'cancelBtn', 'Cancel', 'button', 'Cancel action'),
    createButton('confirm-modal', 'confirmBtn', 'Confirm', 'button', 'Confirm action'))
  modalContainerConfirm.append(modalHeaderConfirm, modalButtonsConfirm)

  const root = document.querySelector('#root')
  root.append(modalOverlayConfirm)
}
