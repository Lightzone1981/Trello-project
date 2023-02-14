import { createButton } from './button.js'

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
    case 'todo':
      panel.append(createButton('add-new-card-button', 'panel__button', 'Add new card', 'button', 'Create new task'))
      break
    case 'done': panel.append(createButton('delete-all-button', 'panel__button', 'Delete All', 'button', 'Delete all completed cards'))
  }
  return panel
}
