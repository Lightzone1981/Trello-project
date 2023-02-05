import { createButton } from '../components/button.js'
// Верстка header доски
export function createBoardHeader (getDomElements) {
  const boardHeader = document.createElement('header')
  boardHeader.className = 'board__header'

  const boardHeaderTitle = document.createElement('h1')
  boardHeaderTitle.className = 'board__header-title'
  boardHeaderTitle.innerText = 'Какой-то текст заголовка'

  //  Здесь будут usersAvatars
  // const boardHeaderAvatars = document.createElement('div')
  // boardHeaderAvatarsDiv.className = ' board_users-Avatars'

  const boardMenuButton = createButton('id, className, text, type')

  boardHeader.append(boardHeaderTitle, boardMenuButton)

  return boardHeader
}
