import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { getData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'

export function handlerEditCard (cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const idNumber = cardId.split('-')[0]
  
  arrayCards.forEach(item => {
    if (String(item.id) === String(idNumber)) {
      initEditCardModalWindow(item.id)
    }
  })
  const domElements = getDomElements()
  
  domElements.modalContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-edit-cancel') {
      domElements.modalOverlay.remove()
      console.log(modalContainer)
    }
    if (event.target.id === 'modal-edit-confirm') {
      
      domElements.modalOverlay.remove()

      renderAllData()
      initAllListeners()
    }
  })
}
