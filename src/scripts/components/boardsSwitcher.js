
import { getData } from '../utils/dataUtils.js'
import { createButton } from './button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'
import { getColors } from '../utils/getColors.js'

export function createBoardsSwitcher () {
  const boardsArray = getData()

  const boardSwitcher = document.createElement('div')
  boardSwitcher.id = 'boards-switcher'
  boardSwitcher.className = 'boards-switcher'
  if (boardsArray.length) {
    boardsArray.forEach((element, index) => {
      index++
      const labelShowRadioButton = document.createElement('label')
      labelShowRadioButton.name = 'radio-show-button'
      labelShowRadioButton.setAttribute('for', `board-radio-button-${element.id}`)
      labelShowRadioButton.title = `Show board-${index}`
      labelShowRadioButton.innerText = `board-${index}`
      labelShowRadioButton.className = 'boards-switcher__radio-button-label'

      const boardRadioButton = document.createElement('input')
      boardRadioButton.id = `board-radio-button-${element.id}`
      boardRadioButton.type = 'radio'
      boardRadioButton.className = 'boards-switcher__radio-button'
      if (element.status === 'active') {
        boardRadioButton.checked = true
        labelShowRadioButton.style.color = getActiveBoardColor('normal')
      } else {
        labelShowRadioButton.style.background = getColors()[element.color].transparent
      }
      boardRadioButton.name = 'radio-show-button'

      boardSwitcher.append(boardRadioButton, labelShowRadioButton)
    })
  }
  if (boardsArray.length < 5) {
    boardSwitcher.append(createButton('boards-switcher-button-add', 'boards-switcher__button-add', '', 'button', 'Add new board'))
  }
  return boardSwitcher
}
