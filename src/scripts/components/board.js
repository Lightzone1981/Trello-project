import { createBoardHeader } from './boardHeader.js'
import { createPanel } from '../components/panel.js'

// верстка доски
export function createBoard () {
  const board = document.createElement('main')
  board.className = 'board'

  const boardPanelsContainer = document.createElement('div')
  boardPanelsContainer.className = 'board__panels-container'

  const todoPanel = createPanel('todo')
  const progressPanel = createPanel('progress')
  const donePanel = createPanel('done')
  boardPanelsContainer.append(todoPanel, progressPanel, donePanel)

  board.append(createBoardHeader(), boardPanelsContainer)

  return board
}
