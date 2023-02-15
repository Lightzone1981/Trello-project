import { getData } from './dataUtils.js'
import { getColors } from './getColors.js'
import { getActiveBoardIndex } from './getActiveBoardIndex.js'

export const getActiveBoardColor = (type) => {
  const colors = getColors()
  const boardsArray = getData()
  const activeBoard = boardsArray[getActiveBoardIndex()]
  return colors[activeBoard.color][type]
}
