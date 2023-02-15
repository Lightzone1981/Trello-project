import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export const renderBoardHeader = (domElements) => {
  const boardsArray = getData()
  const activeBoard = boardsArray[getActiveBoardIndex()]
  domElements.boardTitle.innerText = activeBoard.title
  domElements.boardHeader.style.background = getActiveBoardColor('normal')
}
