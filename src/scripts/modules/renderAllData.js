// Отрисовка todo progress done
import { renderBoardHeader } from '../modules/renderBoardHeader.js'
import { renderPanel } from '../modules/renderPanel.js'

export const renderAllData = (domElements) => {
  renderBoardHeader(domElements)
  renderPanel(domElements, 'todo')
  renderPanel(domElements, 'progress')
  renderPanel(domElements, 'done')
}
