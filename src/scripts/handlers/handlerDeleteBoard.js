import { initConfirmModalWindow } from '../components/confirmModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'

export function handlerDeleteBoard () {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const boardTitle = boardsArray[activeBoardIndex].title

  initConfirmModalWindow(`Do you want to delete '${boardTitle}'?`)
  const domElements = getDomElements()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  domElements.modalOverlayConfirm.addEventListener('click', (event) => {
    if (event.target.id === 'modal-confirm-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
    if (event.target.id === 'modal-confirm-confirm') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'

      renderAllData()
      initAllListeners()
    }
  })
}
