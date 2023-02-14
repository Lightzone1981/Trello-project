import { getData, getTasksCount } from '../utils/dataUtils.js'
import { scrollDown } from '../utils/scrollDown.js'
import { clear } from '../utils/clearComponent.js'
import { renderTaskCard } from './renderTaskCard.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'

function getCompletedCardsCount (cardsArray) {
  return cardsArray.reduce((acc, item) => {
    if (item.type === 'done') { ++acc }
    return acc
  }, 0)
}

export const renderPanel = (domElements, panelType) => {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const cardsArray = boardsArray[activeBoardIndex].tasksArray

  domElements[`${panelType}Count`].innerText = getTasksCount(cardsArray, panelType)
  clear(domElements[`${panelType}PanelContainer`])

  cardsArray.forEach(item => {
    if (item.type === panelType) {
      renderTaskCard(panelType, item)
    }
  })
  scrollDown(domElements[`${panelType}PanelContainer`])

  if (!getCompletedCardsCount(cardsArray)) {
    domElements.deleteAllButton.style.display = 'none'
  }
}
