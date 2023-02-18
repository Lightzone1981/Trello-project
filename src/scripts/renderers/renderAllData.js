// Отрисовка todo progress done
import { renderBoardHeader } from '../renderers/renderBoardHeader.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { renderBoard } from './renderBoard.js'
import { getDomElements } from '../utils/getDomElements'
import { renderBoardBackground } from './renderBoardBackground.js'
import { getData } from '../utils/dataUtils.js'
import { clear } from '../utils/clearComponent.js'
import { renderClock } from './renderClock.js'

export const renderAllData = () => {
  const boardsArray = getData()
  renderClock()

  if (boardsArray.length) {
    renderBoardBackground()
    renderBoard()
    renderBoardHeader()
    const domElements = getDomElements()

    renderPanel(domElements, 'todo')
    renderPanel(domElements, 'progress')
    renderPanel(domElements, 'done')
  } else {
    const domElements = getDomElements()
    clear(domElements.boardsContainer)
    document.body.style.background = '#000'
  }
}
