import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDeleteCard (cardId) {
  initConfirmModalWindow('Do you want to delete current task?')
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const domElements = getDomElements()

  domElements.modalOverlayConfirm.addEventListener('click', (event) => {
    if (event.target.id === 'modal-confirm-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
    if (event.target.id === 'modal-confirm-confirm') {
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
}
