import { createButton } from '../components/button.js'
import { createUserBar } from '../components/usersBar.js'

// верстка header доски
export function createBoardHeader () {
  const boardHeader = document.createElement('header')
  boardHeader.className = 'board__header'

  const boardHeaderTitle = document.createElement('h1')
  boardHeaderTitle.className = 'board__header-title'
  const divider = document.createElement('div')
  divider.classList = 'divider'

  const boardSettingsButton = createButton('board-settings-button', 'board__settings-button', '', 'button', 'Board Settings')
  const boardDeleteButton = createButton('board-delete-button', 'board__delete-button', '', 'button', 'Delete Board')

  boardHeader.append(boardHeaderTitle, divider, createUserBar(), boardSettingsButton, boardDeleteButton)

  return boardHeader
}
