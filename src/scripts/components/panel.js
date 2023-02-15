import { createButton } from './button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

// верстка панели для карточек
export function createPanel (type) {
  const panel = document.createElement('section')
  panel.className = `panel  panel-${type}`
  panel.id = `panel-${type}`

  const panelHeader = document.createElement('div')
  panelHeader.className = 'panel__header'
  panel.append(panelHeader)

  const panelTitle = document.createElement('h2')
  panelTitle.className = 'panel__title'
  panelTitle.textContent = `${type}:`
  panelHeader.append(panelTitle)

  const panelCount = document.createElement('h2')
  panelCount.className = 'panel__count'
  panelCount.id = `panel-count-${type}`
  panelHeader.append(panelCount)

  const panelContainer = document.createElement('div')
  panelContainer.className = 'panel__container'
  panelContainer.id = `panel-container-${type}`
  panel.append(panelContainer)

  switch (type) {
    case 'todo': {
      const addCardButton = createButton('add-new-card-button', 'panel__button', 'Add new card', 'button', 'Create new task')
      addCardButton.style.backgroundColor = getActiveBoardColor('transparent')

      addCardButton.onmouseover = function () {
        addCardButton.style.backgroundColor = getActiveBoardColor('normal')
      }
      addCardButton.onmouseout = function () {
        addCardButton.style.backgroundColor = getActiveBoardColor('transparent')
      }
      panel.append(addCardButton)
      break
    }
    case 'done': {
      const deleteCardButton = createButton('delete-all-button', 'panel__button', 'Delete All', 'button', 'Delete all completed cards')
      deleteCardButton.style.backgroundColor = getActiveBoardColor('transparent')
      deleteCardButton.onmouseover = function () {
        deleteCardButton.style.backgroundColor = getActiveBoardColor('normal')
      }
      deleteCardButton.onmouseout = function () {
        deleteCardButton.style.backgroundColor = getActiveBoardColor('transparent')
      }
      panel.append(deleteCardButton)
      panelContainer.style.backgroundColor = getActiveBoardColor('transparent')
      panelContainer.onmouseover = function () {
        panelContainer.style.backgroundColor = getActiveBoardColor('normal')
      }
      panelContainer.onmouseout = function () {
        panelContainer.style.backgroundColor = getActiveBoardColor('transparent')
      }
    }
  }
  return panel
}
