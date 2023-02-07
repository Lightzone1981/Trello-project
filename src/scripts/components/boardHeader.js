import { createButton } from '../components/button.js'

// верстка header доски
export function createBoardHeader () {
  const boardHeader = document.createElement('header')
  boardHeader.className = 'board__header container'

  const boardHeaderTitle = document.createElement('h1')
  boardHeaderTitle.className = 'board__header-title'

  // Здесь будут usersAvatars
  // const boardHeaderAvatars = document.createElement('div')
  // boardHeaderAvatarsDiv.className = ' board__users-Avatars'

  const boardMenuButton = createButton('#board-menu-button', 'board__menu-button', '', 'button')

  boardHeader.append(boardHeaderTitle, boardMenuButton)

  return boardHeader
}
