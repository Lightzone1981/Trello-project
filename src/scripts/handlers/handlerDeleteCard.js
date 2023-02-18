import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { getDomElements } from '../utils/getDomElements.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDeleteCard (cardId, cardType) {
  initConfirmModalWindow('Delete current task?')
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex][`${cardType}Tasks`]
  const domElements = getDomElements()

  domElements.modalConfirmContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
    if (event.target.id === 'modal-confirm') {
      const idNumber = cardId.split('-')[0]

      cardsArray.forEach((item, index) => {
        if (String(item.id) === String(idNumber)) {
          const panelType = item.type
          item.type = 'delete'
          boardsArray[activeBoardIndex].deleteTasks.push(item)
          cardsArray.splice(index, 1)
          setData(boardsArray)
          renderPanel(domElements, panelType)
        }
      })

      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  })

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)
}
