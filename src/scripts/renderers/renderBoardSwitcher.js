import { createBoardsSwitcher } from '../components/boardsSwitcher.js'

export function renderBoardsSwitcher () {
  const boardSwitcher = document.querySelector('#boards-switcher')
  const header = document.querySelector('#main-header')
  boardSwitcher.remove()
  header.prepend(createBoardsSwitcher())
}
