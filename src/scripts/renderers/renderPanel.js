import { getData, getTasksCount } from '../utils/dataUtils.js'
import { scrollDown } from '../utils/scrollDown.js'
import { clear } from '../utils/clearComponent.js'
import { renderTaskCard } from './renderTaskCard.js'

export const renderPanel = (domElements, panelType) => {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray

  domElements[`${panelType}Count`].innerText = getTasksCount(arrayCards, panelType)
  clear(domElements[`${panelType}PanelContainer`])

  arrayCards.forEach(item => {
    if (item.type === panelType) {
      renderTaskCard(panelType, item)
    }
  })
  scrollDown(domElements[`${panelType}PanelContainer`])
}
