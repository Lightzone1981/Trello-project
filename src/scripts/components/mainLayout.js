import { createHeader } from '../components/mainHeader.js'
import { createBoard } from '../components/board.js'

// верстка основного шаблона приложения
export function createMainLayout (root) {
  const wrapper = document.createElement('div')
  wrapper.className = 'main-wrapper'

  const mainHeader = createHeader()
  wrapper.append(mainHeader)

  const mainBoardsContainer = document.createElement('main')
  mainBoardsContainer.className = 'boards-container container'

  mainBoardsContainer.append(createBoard())
  wrapper.append(mainBoardsContainer)

  root.append(wrapper)
}
