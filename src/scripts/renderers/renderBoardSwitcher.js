import { createBoardsSwitcher } from '../components/boardsSwitcher.js'
import { getDomElements } from '../utils/getDomElements.js'

export function renderBoardsSwitcher () {
  const domElements = getDomElements()
  domElements.boardSwitcher.remove()
  domElements.boardSwitcherWrapper.append(createBoardsSwitcher())
}
