
import { getData } from '../utils/dataUtils.js'
import { createButton } from '../components/button.js'

export function createBoardsSwitcher () {
  const boardsArray = getData()
  const boardSwitcher = document.createElement('div')
  boardSwitcher.id = 'boards-switcher'
  boardSwitcher.className = 'boards-switcher'

  boardsArray.forEach((element, index) => {
    index++
    const boardRadioButton = document.createElement('input')
    boardRadioButton.id = `board-radio-button-${element.id}`
    boardRadioButton.type = 'radio'
    boardRadioButton.className = 'board-radio-button'
    if (element.status === 'active') {
      boardRadioButton.checked = true
    }
    boardRadioButton.name = 'radio-show-button'

    const labelShowRadioButton = document.createElement('label')
    labelShowRadioButton.name = 'radio-show-button'
    labelShowRadioButton.setAttribute('for', `${boardRadioButton.id}`)
    labelShowRadioButton.title = `Show board-${index}`
    labelShowRadioButton.innerText = `board-${index}`
    labelShowRadioButton.className = 'label-button__radio'

    boardSwitcher.append(boardRadioButton, labelShowRadioButton)
  })
  boardSwitcher.append(createButton('boards-switcher', 'boards-switcher__button-add', '+++', 'button', 'Add new board'))

  return boardSwitcher
}
