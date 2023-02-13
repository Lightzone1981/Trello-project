import { initConfirmModalWindow } from '../components/confirmModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getData } from '../utils/dataUtils.js'
const DeleteBoardText = 'Delete board?'
export function handlerDeleteBoard () {
  getData()
  initConfirmModalWindow(DeleteBoardText)
  const domElements = getDomElements()

  domElements.modalOverlayConfirm.addEventListener('click', (event) => {
    if (event.target.id === 'modal-confirm-cancel') {
      domElements.modalOverlay.remove()
    }
    if (event.target.id === 'modal-confirm-confirm') {
      domElements.modalOverlay.remove()

      renderAllData()
      initAllListeners()
    }
  })
}
