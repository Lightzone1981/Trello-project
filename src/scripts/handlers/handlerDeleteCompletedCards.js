import { getDomElements } from '../utils/getDomElements.js'
import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { initAllListeners } from '../initAllListeners.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDeleteCompletedCards (id = '', elem) {
  initConfirmModalWindow('Do you want to delete all completed tasks?')

  const domElements = getDomElements()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
    }
  }, true)

  domElements.modalOverlayConfirm.addEventListener('click', (event) => {
    if (event.target.id === 'modal-confirm-cancel') {
      domElements.modalOverlay.remove()
    }
    if (event.target.id === 'modal-confirm-confirm') {
      const boardsArray = getData()
      const activeBoardIndex = getActiveBoardIndex()
      const boardTasksArray = boardsArray[activeBoardIndex].tasksArray

      boardsArray[activeBoardIndex].tasksArray = boardTasksArray.map(item => {
        if (item.type === 'done') { item.type = 'delete' }
        return item
      })
      setData(boardsArray)
      domElements.modalOverlay.remove()

      renderAllData()
      initAllListeners()
    }
  })
}
