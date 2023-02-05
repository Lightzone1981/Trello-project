export function createBoard () {
  const boardContainer = document.createElement('div')
  boardContainer.className = 'board container'

  // import { createBoardHeader } from './boardHeader'
  // boardContainer.append(import)

  const boardPanelsContainer = document.createElement('div')
  boardPanelsContainer.className = 'board__panels-container'
  boardContainer.append(boardPanelsContainer)
  return boardContainer
}
