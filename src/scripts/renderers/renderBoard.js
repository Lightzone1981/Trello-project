import { createBoardHeader } from '../components/boardHeader.js'
import { createPanel } from '../components/panel.js'
import { getDomElements } from '../utils/getDomElements.js'
import { createButton } from '../components/button.js'

// верстка доски
export function renderBoard () {
  const domElements = getDomElements()

  domElements.boardsContainer.innerHTML = ''

  const board = document.createElement('main')
  board.className = 'board'

  const boardPanelsContainer = document.createElement('div')
  boardPanelsContainer.className = 'board__panels-container'

  boardPanelsContainer.append(
    createButton('switch-panel-left', 'switch-panel', '', 'button', '', ''),
    createButton('switch-panel-right', 'switch-panel', '', 'button', '', ''))

  const todoPanel = createPanel('todo')
  const progressPanel = createPanel('progress')
  const donePanel = createPanel('done')
  boardPanelsContainer.append(todoPanel, progressPanel, donePanel)

  board.append(createBoardHeader(), boardPanelsContainer)

  domElements.boardsContainer.append(board)
}
