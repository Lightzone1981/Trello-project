import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'
import { getDomElements } from '../utils/getDomElements'

export const renderBoardHeader = () => {
  const boardsArray = getData()
  const activeBoard = boardsArray[getActiveBoardIndex()]
  const domElements = getDomElements()

  domElements.boardTitle.innerText = activeBoard.title
  domElements.boardHeader.style.background = getActiveBoardColor('normal')
}
