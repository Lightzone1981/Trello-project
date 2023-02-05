import { createHeader } from '.scr/scripts/components/mainHeader.js'
import { createBoard } from '.scr/scripts/components/boardLayout.js'

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
