// Отрисовка todo progress done
import { renderBoardHeader } from '../renderers/renderBoardHeader.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { renderBoard } from './renderBoard.js'
import { getDomElements } from '../utils/getDomElements'
import { renderBoardsSwitcher } from './renderBoardSwitcher.js'
import { renderClock } from './renderClock.js'

export const renderAllData = () => {
  renderBoard()
  renderBoardsSwitcher()
  renderClock()
  const domElements = getDomElements()
  renderBoardHeader(domElements)
  renderPanel(domElements, 'todo')
  renderPanel(domElements, 'progress')
  renderPanel(domElements, 'done')
}
