import { getData } from './dataUtils.js'
import { getBackgrounds } from './getBackgrounds.js'
import { getActiveBoardIndex } from './getActiveBoardIndex.js'

export const getActiveBoardBackground = () => {
  const backgrounds = getBackgrounds()
  const boardsArray = getData()
  const activeBoard = boardsArray[getActiveBoardIndex()]
  return backgrounds[activeBoard.background]
}
