import { getData, setData } from '../utils/dataUtils.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { scrollDown } from '../utils/scrollDown.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerMoveCardForward (cardId, cardType) {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex][`${cardType}Tasks`]
  const domElements = getDomElements()
  const idNumber = cardId.split('-')[0]

  cardsArray.forEach((item, index) => {
    if (String(item.id) === String(idNumber)) {
      if (item.type === 'todo') {
        item.type = 'progress'
        boardsArray[activeBoardIndex].progressTasks.push(item)
        cardsArray.splice(index, 1)

        setData(boardsArray)
        renderPanel(domElements, 'todo')
        renderPanel(domElements, 'progress')
        scrollDown(domElements.progressPanelContainer)

        return
      }

      if (item.type === 'progress') {
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
            boardsArray[activeBoardIndex].doneTasks.push(item)
            cardsArray.splice(index, 1)

            domElements.modalOverlay.remove()

            setData(boardsArray)
            renderPanel(domElements, 'progress')
            renderPanel(domElements, 'done')
            scrollDown(domElements.donePanelContainer)
          }
        })
      }
    }
  })
}
