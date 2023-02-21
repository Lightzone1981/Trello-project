import { getData } from './dataUtils.js'
import { getColors } from './getColors.js'
import { getActiveBoardIndex } from './getActiveBoardIndex.js'

export const getActiveBoardColor = (type) => {
  const colors = getColors()
  const boardsArray = getData()
  if (boardsArray.length) {
    const activeBoard = boardsArray[getActiveBoardIndex()]
    return colors[activeBoard.color][type]
  } else {
    return '#2271b1'
  }
}
