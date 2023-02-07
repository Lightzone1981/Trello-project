import { getData } from '../utils/dataUtils.js'

export const renderBoardHeader = (domElements) => {
  const boardObject = getData()
  domElements.boardTitle.innerText = boardObject.title
}
