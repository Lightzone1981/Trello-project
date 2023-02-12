import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { getData } from '../utils/dataUtils.js'

export function handlerEditCard (cardId) {
  const boardObjects = getData()
  const arrayCards = boardObjects[0].tasksArray
  const idNumber = cardId.split('-')[0]
  arrayCards.forEach(item => {
    if (String(item.id) === String(idNumber)) {
      initEditCardModalWindow(item.id)
    }
  })
}
