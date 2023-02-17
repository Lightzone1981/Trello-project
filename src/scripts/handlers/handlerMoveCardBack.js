import { getData, setData } from '../utils/dataUtils.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { getDomElements } from '../utils/getDomElements.js'
import { scrollDown } from '../utils/scrollDown.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'

export function handlerMoveCardBack (cardId) {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex].progressTasks
  const domElements = getDomElements()

  const idNumber = cardId.split('-')[0]
  cardsArray.forEach((item, index) => {
    if (String(item.id) === String(idNumber)) {
      item.type = 'todo'
      boardsArray[activeBoardIndex].todoTasks.push(item)
      cardsArray.splice(index, 1)

      setData(boardsArray)
      renderPanel(domElements, 'todo')
      scrollDown(domElements.todoPanelContainer)
      renderPanel(domElements, 'progress')
    }
  })
}
