import { getDomElements } from '../utils/getDomElements.js'
import { getData } from '../utils/dataUtils.js'
import { arrayCards } from '../components/editCardModalWindow.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { initAllListeners } from '../initAllListeners.js'
import { getActiveBoardIndex } from '../renderers/renderBoard.js'

export function handlerRemoveAllDoneCards (id = '', elem) {
  const domElements = getDomElements()
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const boardTasksArray = boardsArray[activeBoardIndex].tasksArray

  const newTasksArray = boardTasksArray

  arrayCards.forEach(item => {
    if (item.type === item.done) {
      newTasksArray.length = 0

      domElements.donePanel.remove()
      renderAllData()
      initAllListeners()
    }
  })
}
