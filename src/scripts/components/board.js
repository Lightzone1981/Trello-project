import { createBoardHeader } from './boardHeader.js'
import { createPanel } from '../components/panel'

// верстка доски
export function createBoard () {
  const board = document.createElement('main')
  board.className = 'board container'

  const boardPanelsContainer = document.createElement('div')
  boardPanelsContainer.className = 'board__panels-container'

  const todoPanel = createPanel('todo')
  const progressPanel = createPanel('proress')
  const donePanel = createPanel('done')
  boardPanelsContainer.append(todoPanel, progressPanel, donePanel)

  board.append(createBoardHeader(), boardPanelsContainer)

  return board
}
