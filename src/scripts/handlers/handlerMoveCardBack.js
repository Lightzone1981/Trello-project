import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'

export function handlerMoveCardBack(cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const domElements = getDomElements()

  const idNumber = cardId.split('-')[0]
  arrayCards.forEach((item) => {
    if (String(item.id) === String(idNumber)) {
      item.type = 'todo'
      setData(boardObjects)

      renderAllData()
      initAllListeners()
    }
  })
}
