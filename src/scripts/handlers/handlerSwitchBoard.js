import { renderAllData } from '../renderers/renderAllData.js'
import { makeBoardActive } from '../utils/makeBoardActive.js'
import { renderBoardsSwitcher } from '../renderers/renderBoardSwitcher.js'
import { getDomElements } from '../utils/getDomElements.js'

export const handlerSwitchBoard = (boardId) => {
  const domElements = getDomElements()
  makeBoardActive(boardId)
  renderBoardsSwitcher()
  renderAllData()
  domElements.clickSound.play()
}
