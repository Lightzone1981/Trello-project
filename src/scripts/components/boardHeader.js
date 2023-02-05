import { createButton } from '../components/button.js'
// Создаем ф-ию доска заголовка
export function createBoardHeader (getDomElements) {
  const boardHeader = document.createElement('header')
  boardHeader.className = 'board__header'

  const boardHeaderTitle = document.createElement('h1')
  boardHeaderTitle.className = 'board__header-title'
  boardHeaderTitle.innerText = 'Какой-то текст заголовка'

  // const boardHeaderAvatarsDiv = document.createElement('div')
  // boardHeaderAvatarsDiv.className = ' board_users-Avatars'

  const boardMenuButton = document.createElement('button')
  boardMenuButton.className = 'board__menu-button'
  createButton()

  boardHeader.append(boardHeaderTitle, boardMenuButton)

  return boardHeader
}
