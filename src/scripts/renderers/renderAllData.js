// Отрисовка todo progress done
import { renderBoardHeader } from '../renderers/renderBoardHeader.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { renderBoard } from './renderBoard.js'
import { getDomElements } from '../utils/getDomElements'
import { renderBoardBackground } from './renderBoardBackground.js'
import { getData } from '../utils/dataUtils.js'
import { clear } from '../utils/clearComponent.js'
import { renderClock } from './renderClock.js'
import { createSplashScreen } from '../components/splashScreen.js'

export const renderAllData = () => {
  const boardsArray = getData()
  renderClock()

  if (boardsArray.length) {
    renderBoardBackground()
    renderBoard()
    renderBoardHeader()
    const domElements = getDomElements()
    domElements.boardHeaderLogo.style.opacity = '1'
    domElements.clockInfo.style.opacity = '1'
    domElements.boardSwitcherTitle.style.display = 'none'

    if (window.innerWidth < 768) {
      domElements.progressPanel.setAttribute('disable', '')
      domElements.donePanel.setAttribute('disable', '')

      domElements.switchPanelLeft.setAttribute('disable', '')
      domElements.switchPanelRight.removeAttribute('disable', '')
    } else {
      domElements.switchPanelLeft.style.display = 'none'
      domElements.switchPanelRight.style.display = 'none'
    }

    renderPanel(domElements, 'todo')
    renderPanel(domElements, 'progress')
    renderPanel(domElements, 'done')
  } else {
    const domElements = getDomElements()
    clear(domElements.boardsContainer)
    domElements.boardHeaderLogo.style.opacity = '0'
    domElements.clockInfo.style.opacity = '0'
    domElements.boardSwitcherTitle.style.display = 'block'
    document.body.style.background =
      'url(\'https://cashtech.com.au/wp-content/uploads/2017/05/Untitled-19.jpg\') center/cover no-repeat'

    domElements.boardsContainer.append(createSplashScreen())
  }
}
