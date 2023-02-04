// import {getTasksCount} from '../utils/dataUtils.js'
// import {createButton}

export function createPanel (type, title, buttonName) {
  const panel = document.createElement('section')
  panel.className = `panel  ${type}`
  panel.id = `${type}`
  //   root.append(panel)

  const panelHeader = document.createElement('div')
  panelHeader.className = `panel__header ${type}__header`
  panel.append(panelHeader)

  const panelTitle = document.createElement('h2')
  panelTitle.className = 'panel-title'
  panelTitle.textContent = title
  panelHeader.append(panelTitle)

  const panelCount = document.createElement('p')
  panelCount.className = 'panel__count'
  panelCount.id = `${type}__count`
  // panelCount.textContent = getTasksCount(type)
  panelHeader.append(panelCount)

  const panelContainer = document.createElement('div')
  panelContainer.className = 'panel__container'
  panelContainer.id = `${type}__container`
  panel.append(panelContainer)
  // taskCard()

  if (buttonName === 'Add todo') {
    // createButton('panel-todo-button','panel-button','Add todo')
  } else if (buttonName === 'Delete All') {
    // createButton('panel-done-button','panel-button','Add todo')
  }

  return panel
}
