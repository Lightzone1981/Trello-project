import { createBoardSettingsWindow } from '../components/boardSettingsWindow.js'
import { getDomElements } from '../utils/getDomElements.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getData, setData } from '../utils/dataUtils.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { renderBoardsSwitcher } from '../renderers/renderBoardSwitcher.js'

export const handlerChangeBoardSettings = (flag) => {
  createBoardSettingsWindow()
  const domElements = getDomElements()

  const boardsArray = getData()

  const activeBoardIndex = getActiveBoardIndex()
  const activeBoard = boardsArray[activeBoardIndex]

  if (flag === 'new') {
    domElements.boardSettingsCancelButton.style.display = 'none'
  }

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.boardSettingsWrapper.remove()
      document.body.style.overflow = 'auto'
    }
  }, true)

  // вешаем слушателя на окно редактирования пользователей
  domElements.boardSettingsWrapper.addEventListener('click', (event) => {
    // событие нажатия кнопки "save"
    if (event.target.id === 'board-settings-save-button') {
      event.preventDefault()
      activeBoard.title = domElements.boardSettingsTitle.value

      const backgroundLabels = document.querySelectorAll('.board-settings__background-radio')
      backgroundLabels.forEach((item) => {
        if (item.checked === true) {
          activeBoard.background = item.id.match(/\d/g).join('')
        }
      })

      const colorsLabels = document.querySelectorAll('.board-settings__colors-radio')
      colorsLabels.forEach((item) => {
        if (item.checked === true) {
          activeBoard.color = item.id.match(/\d/g).join('')
        }
      })

      setData(boardsArray)
      domElements.boardSettingsWrapper.remove()
      document.body.style.overflow = 'auto'
      renderAllData()
      renderBoardsSwitcher()
    }

    // событие нажатия кнопки "cancel"
    if (event.target.id === 'board-settings-cancel-button') {
      domElements.boardSettingsWrapper.remove()
      document.body.style.overflow = 'auto'
    }
  })
}
