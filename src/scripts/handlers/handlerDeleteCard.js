import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { fillSelectList } from '../utils/fillSelectList.js'

export function handlerDeleteCard(cardId){
    const boardObjects = getData()
    const arrayCards = boardObjects[0].tasksArray

    const idNumber = cardId.split('-')[0]
    arrayCards.forEach(item => {
        if (String(item.id) === String(idNumber)) {
          item.type = 'delete'
          setData(boardObjects)
          renderAllData()
          initAllListeners()
        }
      })
      
}