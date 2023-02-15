import { createBoardHeader } from '../components/boardHeader.js'
import { createPanel } from '../components/panel.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getDomElements } from '../utils/getDomElements.js'

// верстка доски
export function renderBoard () {
  const domElements = getDomElements()

  domElements.boardsContainer.innerHTML = ''

  const board = document.createElement('main')
  board.className = 'board'
  board.id = getActiveBoardIndex()

  const boardPanelsContainer = document.createElement('div')
  boardPanelsContainer.className = 'board__panels-container'

  const todoPanel = createPanel('todo')
  const progressPanel = createPanel('progress')
  const donePanel = createPanel('done')
  boardPanelsContainer.append(todoPanel, progressPanel, donePanel)

  board.append(createBoardHeader(), boardPanelsContainer)

  domElements.boardsContainer.append(board)
}
