import { getData } from '../utils/dataUtils.js'
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
  const cardsArray = boardsArray[activeBoardIndex][`${panelType}Tasks`]
  const taskCount = cardsArray.length
  domElements[`${panelType}Count`].innerText = taskCount
  clear(domElements[`${panelType}PanelContainer`])

  cardsArray.forEach(item => renderTaskCard(panelType, item))

  if (panelType === 'done') {
    if (!getCompletedCardsCount(cardsArray)) {
      domElements.deleteAllButton.style.display = 'none'
    } else {
      domElements.deleteAllButton.style.display = 'block'
    }
  }
}
