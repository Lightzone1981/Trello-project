import { handlerCreateNewBoard } from '../handlers/handlerCreateNewBoard.js'
import { handlerCreateNewCard } from '../handlers/handlerCreateNewCard.js'
import { handlerDeleteCompletedCards } from '../handlers/handlerDeleteCompletedCards.js'
import { handlerDeleteCard } from '../handlers/handlerDeleteCard.js'
import { handlerEditCard } from '../handlers/handlerEditCard.js'
import { handlerMoveCardForward } from '../handlers/handlerMoveCardForward.js'
import { handlerMoveCardBack } from '../handlers/handlerMoveCardBack.js'
import { handlerDeleteBoard } from '../handlers/handlerDeleteBoard.js'
import { handlerChangeBoardSettings } from '../handlers/handlerChangeBoardSettings.js'
import { handlerEditBoardUsersList } from '../handlers/handlerEditBoardUsersList.js'
import { handlerSwitchBoard } from '../handlers/handlerSwitchBoard.js'
import { handlerSwitchPanelRight } from '../handlers/handlerSwitchPanelRight.js'
import { handlerSwitchPanelLeft } from '../handlers/handlerSwitchPanelLeft.js'
import { getDomElements } from '../utils/getDomElements.js'
import { handlerWindowResize } from '../handlers/handlerWindowResize.js'
import { handlerShowSplashScreen } from '../handlers/handlerShowSplashScreen.js'
import { handlerDragAndDrop } from '../handlers/handlerDragAndDrop.js'

// инициализация слушателей событий
export const initAllListeners = () => {
  const domElements = getDomElements()

  domElements.boardsContainer.addEventListener('dragstart', (event) => {
    // событие захвата карточки для перетаскивания
    if (event.target.id.indexOf('task-card') !== -1) {
      event.dataTransfer.effectAllowed = 'move'

      const cardId = event.target.id.split('-').at(-1)
      const cardNode = document.querySelector(`#task-card-${cardId}`)
      const cardType = [...cardNode.classList][1].split('-').at(-1)

      handlerDragAndDrop(cardNode, cardId, cardType)
    }
  })

  // вешаем слушателей на основной контейнер доски
  domElements.boardsContainer.addEventListener('click', (event) => {
    if (event.target.id === 'add-new-card-button') {
      handlerCreateNewCard(event.target.id, domElements)
    }

    // событие нажатия кнопки "Delete All"
    if (event.target.id === 'delete-all-button') {
      handlerDeleteCompletedCards()
    }

    // событие нажатия кнопки "удалить карточку"
    if (event.target.id.indexOf('card-delete-button') !== -1) {
      const allCards = document.querySelectorAll('.task-card')
      const idNumber = event.target.id.split('-')[0]

      allCards.forEach((card) => {
        if (card.id.indexOf(idNumber) !== -1) {
          handlerDeleteCard(event.target.id, card.classList.value.split('--').at(-1))
        }
      })
    }

    // событие нажатия кнопки "редактировать карточку"
    if (event.target.id.indexOf('card-edit-button') !== -1) {
      handlerEditCard(event.target.id)
    }

    // событие нажатия кнопки "переместить карточку вперед"

    if (event.target.id.indexOf('card-forward-button') !== -1) {
      const allCards = document.querySelectorAll('.task-card')
      const idNumber = event.target.id.split('-')[0]

      allCards.forEach((card) => {
        if (card.id.indexOf(idNumber) !== -1) {
          handlerMoveCardForward(event.target.id, card.classList.value.split('--').at(-1))
        }
      })
    }

    // событие нажатия кнопки "переместить карточку назад"
    if (event.target.id.indexOf('card-back-button') !== -1) {
      handlerMoveCardBack(event.target.id)
    }

    // событие нажатия кнопки удаления доски в шапке доски
    if (event.target.id === 'board-delete-button') {
      handlerDeleteBoard()
    }

    // событие нажатия кнопки settings в шапке доски
    if (event.target.id === 'board-settings-button') {
      handlerChangeBoardSettings()
    }

    // событие нажатия кнопки users в шапке доски
    if (event.target.id === 'users-bar-button') {
      handlerEditBoardUsersList()
    }

    // события нажатия кнопки переключения панели вправо
    if (event.target.id === 'switch-panel-right') {
      handlerSwitchPanelRight()
      domElements.clickSound.play()
    }

    // события нажатия кнопки переключения панели влево
    if (event.target.id === 'switch-panel-left') {
      handlerSwitchPanelLeft()
      domElements.clickSound.play()
    }
  })

  // вешаем слушателей на переключатели доски
  domElements.boardSwitcherWrapper.addEventListener('click', (event) => {
    // события нажатия кнопки Add new board
    if (event.target.id === 'boards-switcher-button-add') {
      handlerCreateNewBoard()
    }
    // события нажатия радио кнопки переключения доски
    if (event.target.id.includes('board-radio-button')) {
      const boardId = event.target.id.split('-').at(-1)
      handlerSwitchBoard(boardId)
    }
  })

  // вешаем слушателей на нажатие логотипа
  domElements.boardHeaderLogo.addEventListener('click', (event) => {
    domElements.clickSound.play()
    handlerShowSplashScreen()
  })

  // событие изменения размеров окна (управляет отображением меню на экране)
  window.addEventListener('resize', () => {
    handlerWindowResize()
  })
}
