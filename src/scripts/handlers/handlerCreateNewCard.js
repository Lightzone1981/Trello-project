import { initEditCardModalWindow } from '../components/editCardModalWindow.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getData, setData, createNewCard } from '../utils/dataUtils.js'
import { scrollDown } from '../utils/scrollDown.js'

export const handlerCreateNewCard = () => {
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

      if (domElements.newUserSelect.value === 'empty') {
        boardsArray[activeBoardIndex].todoTasks.push(createNewCard(
          domElements.modalTitle.value,
          domElements.modalDescription.value,
          'user is not assigned'
        ))
      } else {
        boardsArray[activeBoardIndex].todoTasks.push(createNewCard(
          domElements.modalTitle.value,
          domElements.modalDescription.value,
          domElements.newUserSelect.value
        ))
      }

      setData(boardsArray)
      renderPanel(domElements, 'todo')
      scrollDown(domElements.todoPanelContainer)
    }
  })
}
