import { getActiveBoardBackground } from '../utils/getActiveBoardBackground.js'

export function renderBoardBackground () {
  document.body.style.background = getActiveBoardBackground()
}
