import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDeleteCard (cardId) {
  initConfirmModalWindow('Do you want to delete current task?')
  const boardObjects = getData()
  const arrayCards = boardObjects[getActiveBoardIndex()].tasksArray
  const domElements = getDomElements()

  domElements.modalConfirmContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
    if (event.target.id === 'modal-confirm') {
      const idNumber = cardId.split('-')[0]
      arrayCards.forEach((item) => {
        if (String(item.id) === String(idNumber)) {
          item.type = 'delete'
          domElements.modalOverlay.remove()
          document.body.style.overflow = 'auto'

          setData(boardObjects)

          renderAllData()
          initAllListeners()
        }
      })
    }
  })

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)
}
