import { createHeader } from '../components/mainHeader.js'

// верстка основного шаблона приложения
export function createMainLayout (root) {
  const wrapper = document.createElement('div')
  wrapper.className = 'main-wrapper'

  const mainHeader = createHeader()
  wrapper.append(mainHeader)

  const mainBoardsContainer = document.createElement('main')
  mainBoardsContainer.className = 'boards-container container'
  mainBoardsContainer.id = 'boards-container'

  wrapper.append(mainBoardsContainer)

  root.append(wrapper)
}
