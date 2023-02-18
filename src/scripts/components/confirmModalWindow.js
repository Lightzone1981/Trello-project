import { createButton } from './button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export function initConfirmModalWindow (message, type) {
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

  if (type !== 'alert') {
    modalConfirmButtonsContainer.append(
      createButton('modal-confirm', 'modal-button', 'Confirm', 'button', 'Confirm action', 'fill'),
      createButton('modal-cancel', 'modal-button', 'Cancel', 'button', 'Cancel action', 'fill'))
  } else {
    modalConfirmButtonsContainer.append(
      createButton('modal-cancel', 'modal-button', 'OK', 'button', '', 'fill'))
  }
  modalConfirmContainer.append(modalConfirmButtonsContainer)

  const root = document.querySelector('#root')
  root.append(modalConfirmOverlay)
  document.body.style.overflow = 'hidden'
}
