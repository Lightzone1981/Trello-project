import { getData, setData } from '../utils/dataUtils.js'

// переключает статус доски в состояние 'active'
export const makeBoardActive = (boardId) => {
  const boardsArray = getData()
  boardsArray.forEach(board => {
    if (`${board.id}` === `${boardId}`) {
      board.status = 'active'
    } else {
      board.status = 'disable'
    }
  })
  setData(boardsArray)
}
