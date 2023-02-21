import { getDomElements } from '../utils/getDomElements.js'
import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDeleteCompletedCards () {
  initConfirmModalWindow('Delete all completed tasks?')

  const domElements = getDomElements()
  domElements.clickSound.play()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  domElements.modalConfirmContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
      domElements.clickSound.play()
    }
    if (event.target.id === 'modal-confirm') {
      const boardsArray = getData()
      const activeBoardIndex = getActiveBoardIndex()

      boardsArray[activeBoardIndex].doneTasks.forEach((element) => {
        element.type = 'delete'
        boardsArray[activeBoardIndex].deleteTasks.push(element)
      })
      boardsArray[activeBoardIndex].doneTasks = []
      domElements.swipeLargeSound.play()

      setData(boardsArray)
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
      renderPanel(domElements, 'done')
      domElements.ringSound.play()
    }
  })
}
