import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { initAllListeners } from '../initAllListeners.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getData, setData, createNewCard } from '../utils/dataUtils.js'

export const handlerCreateNewCard = () => {
//   const boardObjects = getData()

  initEditCardModalWindow('new')
  const domElements = getDomElements()
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
    }
  }, true)

  domElements.modalContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-edit-cancel') {
      domElements.modalOverlay.remove()
    }
    if (event.target.id === 'modal-edit-confirm') {
      domElements.modalOverlay.remove()
      const boardsArray = getData()
      const activeBoardIndex = getActiveBoardIndex()

      const userData = domElements.newUserSelect.value !== 'empty' || 'user is not assigned'

      boardsArray[activeBoardIndex].tasksArray.push(createNewCard(
        domElements.modalTitle.value,
        domElements.modalDescription.value,
        userData
      ))

      setData(boardsArray)

      renderAllData()
      initAllListeners()
    }
  })
}
