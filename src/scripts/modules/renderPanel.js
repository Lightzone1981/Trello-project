import { getData, getTasksCount } from '../utils/dataUtils.js'

import { clear } from '../utils/clearComponent.js'
import { renderTaskCard } from './renderTaskCard.js'

export const renderPanel = (domElements, panelType) => {
  const boardObjects = getData()
  const arrayCards = boardObjects.tasksArray
  domElements[`${panelType}Count`].innerText = getTasksCount(arrayCards, panelType)
  clear(domElements.panelType)

  arrayCards.forEach(item => {
    if (item.type === panelType) { renderTaskCard(panelType, item) }
  })
}
