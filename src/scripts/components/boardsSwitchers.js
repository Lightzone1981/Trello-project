// import { createHeader } from './/mainHeader'
// import { getData } from '../utils/dataUtils.js'

export function createBoardsSwitcher () {
  // const boardsArray = getData()
  // const switcherArray = boardsArray.switcherArray
  const boardSwitcher = document.createElement('div')
  boardSwitcher.id = 'boards-switcher'
  boardSwitcher.className = 'boards-switcher'

  //  boardsArray.forEach(element, index + 1 => {} )

  const boardRadioButton = document.createElement('input')
  // boardRadioButton.id = `board-radio-button-${element.id}`
  boardRadioButton.type = 'radio'
  boardRadioButton.checked = 'true'
  boardRadioButton.name = 'radio-show-button'
  boardRadioButton.setAttribute('')

  const labelShowRadioButton = document.createElement('label')
  labelShowRadioButton.name = 'radio-show-button'
  // labelShowRadioButton.setAttribute('for', element.id)
  labelShowRadioButton.title = 'Show to Taskcard'
  labelShowRadioButton.className = 'label-button__radio'

  // boardSwitcher.append(createButton('boards-switcher', 'boards-switcher__button-add', '', 'button', 'Add new board'))

  return boardSwitcher
}
