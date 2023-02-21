import { initConfirmModalWindow } from '../components/confirmModalWindow.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { makeBoardActive } from '../utils/makeBoardActive.js'
import { renderBoardsSwitcher } from '../renderers/renderBoardSwitcher.js'

export function handlerDeleteBoard () {
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const deletingBoard = boardsArray[activeBoardIndex]
  const boardTitle = boardsArray[activeBoardIndex].title

  initConfirmModalWindow(`Delete  board '${boardTitle}' ?`)
  const domElements = getDomElements()
  domElements.trashSound.play()

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  domElements.modalConfirmContainer.addEventListener('click', (event) => {
    if (event.target.id === 'modal-cancel') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
      domElements.clickSound.play()
    }
    if (event.target.id === 'modal-confirm') {
      domElements.modalOverlay.remove()
      document.body.style.overflow = 'auto'
      domElements.ringSound.play()

      boardsArray.splice(boardsArray.indexOf(deletingBoard), 1)
      setData(boardsArray)

      if (boardsArray.length > 0) makeBoardActive(boardsArray.at(-1).id)

      renderBoardsSwitcher()
      renderAllData()
    }
  })
}
