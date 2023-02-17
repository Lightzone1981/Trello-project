import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { getDomElements } from '../utils/getDomElements.js'

export function handlerEditCard (cardId) {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex].todoTasks

  const idNumber = cardId.split('-')[0]

  cardsArray.forEach(item => {
    if (String(item.id) === String(idNumber)) {
      initEditCardModalWindow(item.id)
    }
  })
  const domElements = getDomElements()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  domElements.modalContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-edit-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
    if (event.target.id === 'modal-edit-confirm') {
      event.preventDefault()

      cardsArray.forEach(item => {
        if (String(item.id) === String(idNumber)) {
          item.title = domElements.modalTitle.value
          item.description = domElements.modalDescription.value

          if (domElements.newUserSelect.value === 'empty') {
            item.user = 'user is not assigned'
          } else {
            item.user = domElements.newUserSelect.value
          }
        }
      })

      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'

      setData(boardsArray)
      renderPanel(domElements, 'todo')
    }
  })
}
