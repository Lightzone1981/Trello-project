// import {getTasksCount} from '../utils/dataUtils.js'
// import {createButton} from '../components/button.js'

export function createPanel (type, title, buttonName) {
  const panel = document.createElement('section')
  panel.className = `panel  panel-${type}`
  panel.id = `panel-${type}`

  const panelHeader = document.createElement('div')
  panelHeader.className = `panel__header panel-${type}__header`
  panel.append(panelHeader)

  const panelTitle = document.createElement('h2')
  panelTitle.className = 'panel-title'
  panelTitle.textContent = title
  panelHeader.append(panelTitle)

  const panelCount = document.createElement('p')
  panelCount.className = 'panel__count'
  panelCount.id = `panel-${type}__count`
  // panelCount.textContent = getTasksCount(type)
  panelHeader.append(panelCount)

  const panelContainer = document.createElement('div')
  panelContainer.className = 'panel__container'
  panelContainer.id = `panel-${type}__container`
  panel.append(panelContainer)
  // taskCard()

  if (buttonName === 'Add todo') {
    // createButton('panel-todo-button','panel-button','Add todo')
  } else if (buttonName === 'Delete All') {
    // createButton('panel-done-button','panel-button','Add todo')
  }

  return panel
}
