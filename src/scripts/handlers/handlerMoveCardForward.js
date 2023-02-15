import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'

import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerMoveCardForward (cardId) {
  const boardsArray = getData()
  const cardsArray = boardsArray[getActiveBoardIndex()].tasksArray

  const idNumber = cardId.split('-')[0]
  cardsArray.forEach((item) => {
    if (String(item.id) === String(idNumber)) {
      if (item.type === 'todo') {
        item.type = 'progress'
        boardsArray[getActiveBoardIndex()].tasksArray = cardsArray
        setData(boardsArray)
        renderAllData()
        initAllListeners()
      } else if (item.type === 'progress') {
        initConfirmModalWindow('Move task to completed?')
        const domElements = getDomElements()

        window.addEventListener('keydown', (event) => {
          if (event.code === 'Escape') {
            domElements.modalOverlay.remove()
            document.body.style.overflow = 'auto'
          }
        }, true)

        domElements.modalConfirmContainer.addEventListener('click', (event) => {
          if (event.target.id === 'modal-cancel') {
            domElements.modalOverlay.remove()
          }
          if (event.target.id === 'modal-confirm') {
            item.type = 'done'
            domElements.modalOverlay.remove()
            boardsArray[getActiveBoardIndex()].tasksArray = cardsArray
            setData(boardsArray)
            renderAllData()
            initAllListeners()
          }
        })
      }
    }
  })
}
