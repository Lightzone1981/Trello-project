import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'

export function handlerMoveCardBack (cardId) {
  const boardsArray = getData()
  const cardsArray = boardsArray[getActiveBoardIndex()].tasksArray

  const idNumber = cardId.split('-')[0]
  cardsArray.forEach((item) => {
    if (String(item.id) === String(idNumber)) {
      item.type = 'todo'
      setData(boardsArray)
      renderAllData()
      initAllListeners()
    }
  })
}
