import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerMoveCardForward(cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const domElements = getDomElements()

  const idNumber = cardId.split('-')[0]
  arrayCards.forEach((item) => {
    if (String(item.id) === String(idNumber)) {
      if (item.type === 'todo') {
        item.type = 'progress'
      }
      else if (item.type === 'progress') {
        initConfirmModalWindow('Do you want to delete all tasks?')
        domElements.modalOverlayConfirm.addEventListener('click', (event) => {
          if (event.target.id === 'modal-confirm-cancel') {
            domElements.modalOverlay.remove()
          }
          if (event.target.id === 'modal-confirm-confirm') {
             item.type = 'done'
          }
        })
      }

      setData(boardObjects)

      renderAllData()
      initAllListeners()
    }
  })
}
