import { getData } from '../utils/dataUtils.js'

export const renderBoardHeader = (domElements) => {
  const boardsObject = getData()
  domElements.boardTitle.innerText = boardsObject[0].title
}
