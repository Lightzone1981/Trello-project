import { createButton } from './button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export function initConfirmModalWindow (message) {
  const modalConfirmOverlay = document.createElement('div')
  modalConfirmOverlay.className = 'modal-overlay'

  const modalConfirmContainer = document.createElement('div')
  modalConfirmContainer.className = 'modal-confirm__container'
  modalConfirmContainer.style.borderColor = getActiveBoardColor('normal')
  modalConfirmOverlay.append(modalConfirmContainer)

  const modalConfirmHeader = document.createElement('h2')
  modalConfirmHeader.className = 'modal-confirm__header'
  modalConfirmHeader.innerText = message

  modalConfirmContainer.append(modalConfirmHeader)

  const modalConfirmButtonsContainer = document.createElement('div')
  modalConfirmButtonsContainer.className = 'modal-confirm__buttons-container'

  modalConfirmButtonsContainer.append(
    createButton('modal-confirm', 'modal-button', 'Confirm', 'button', 'Confirm action', 'fill'),
    createButton('modal-cancel', 'modal-button', 'Cancel', 'button', 'Cancel action', 'fill'))

  modalConfirmContainer.append(modalConfirmButtonsContainer)

  const root = document.querySelector('#root')
  root.append(modalConfirmOverlay)
  document.body.style.overflow = 'hidden'
}
