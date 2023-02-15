import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
// import { getData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
// import { fillSelectList } from '../utils/fillSelectList.js'

export const handlerCreateNewCard = () => {
//   const boardObjects = getData()

  initEditCardModalWindow()
  const domElements = getDomElements()
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
    }
  }, true)

  domElements.modalContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-edit-cancel') {
      domElements.modalOverlay.remove()
    }
    if (event.target.id === 'modal-edit-confirm') {
      domElements.modalOverlay.remove()

      renderAllData()
      initAllListeners()
    }
  })
}
