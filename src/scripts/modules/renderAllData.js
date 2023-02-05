// Отрисовка todo progress done
import { createBoardHeader } from '../components/boardHeader'
import { renderPanel } from '../modules/renderPanel.js'
export const renderAllData = (domElements) => {
  createBoardHeader(domElements)
  renderPanel(domElements, 'todo')
  renderPanel(domElements, 'progress')
  renderPanel(domElements, 'done')
}
