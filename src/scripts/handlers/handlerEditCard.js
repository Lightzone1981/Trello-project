import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'

export function handlerEditCard (cardId) {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex].tasksArray

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
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'

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

      boardsArray[activeBoardIndex].tasksArray = cardsArray
      setData(boardsArray)
      renderAllData()
      initAllListeners()
    }
  })
}
