import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export function renderClock () {
  const clockInfo = document.querySelector('#clock-info')
  clockInfo.style.borderColor = getActiveBoardColor('normal')
}
