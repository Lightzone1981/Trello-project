import { renderAllData } from '../renderers/renderAllData.js'
import { makeBoardActive } from '../utils/makeBoardActive.js'
import { renderBoardsSwitcher } from '../renderers/renderBoardSwitcher.js'

export const handlerSwitchBoard = (boardId) => {
  makeBoardActive(boardId)
  renderBoardsSwitcher()
  renderAllData()
}
