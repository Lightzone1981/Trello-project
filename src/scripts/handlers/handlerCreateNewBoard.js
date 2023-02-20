import { handlerChangeBoardSettings } from './handlerChangeBoardSettings.js'
import { createNewBoard, getData, setData } from '../utils/dataUtils.js'

import { makeBoardActive } from '../utils/makeBoardActive.js'
import { renderBoardsSwitcher } from '../renderers/renderBoardSwitcher.js'
import { renderAllData } from '../renderers/renderAllData.js'

export const handlerCreateNewBoard = () => {
  const boardsArray = getData()

  const newBoard = createNewBoard()
  boardsArray.push(newBoard)
  setData(boardsArray)
  makeBoardActive(newBoard.id)

  renderBoardsSwitcher()
  renderAllData()
  handlerChangeBoardSettings('new')
}
