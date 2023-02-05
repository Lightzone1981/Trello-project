
const root = document.querySelector('#root')

export function createMainLayout () {
  const wrapper = document.createElement('div')
  wrapper.className = 'main-wrapper'
  root.append(wrapper)

  const mainHeader = document.createElement('header')
  mainHeader.className = 'main-header container'
  wrapper.append(mainHeader)

  const mainBoardsContainer = document.createElement('main')
  mainBoardsContainer.className = 'boards-container container'
  wrapper.append(mainBoardsContainer)

  return wrapper
}
