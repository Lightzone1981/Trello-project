// import { handlerCreateNewCard } from './handlers/handlerCreateNewCard.js'
// import { handlerDeleteCompletedCards } from './handlers/handlerDeleteCompletedCards.js'
// import { handlerDeleteCard } from './handlers/handlerDeleteCard.js'
import { handlerEditCard } from './handlers/handlerEditCard.js'
// import { handlerMoveCardForward } from './handlers/handlerMoveCardForward.js'
// import { handlerMoveCardBack } from './handlers/handlerMoveCardBack.js'
// import { handlerDeleteBoard } from './handlers/handlerDeleteBoard.js'
// import { handlerChangeBoardSettings } from './handlers/handlerChangeBoardSettings.js'
import { handlerEditBoardUsersList } from './handlers/handlerEditBoardUsersList.js'

// инициализация слушателей событий
export const initAllListeners = (domElements) => {
  // вешаем слушателей на основной контейнер доски
  domElements.boardContainer.addEventListener('click', (event) => {
    // событие нажатия кнопки "New Card"
    if (event.target.id === 'add-new-card-button') {
      // handlerCreateNewCard(event.target.id, domElements)
    }

    // событие нажатия кнопки "Delete All"
    if (event.target.id === 'delete-all-button') {
      // handlerDeleteCompletedCards(event.target.id, domElements)
    }

    // событие нажатия кнопки "удалить карточку"
    if (event.target.id.indexOf('card-delete-button')) {
      // handlerDeleteCard(event.target.id)
    }

    // событие нажатия кнопки "редактировать карточку"
    if (event.target.id.indexOf('card-edit-button')) {
      handlerEditCard(event.target.id)
    }

    // событие нажатия кнопки "переместить карточку вперед"
    if (event.target.id.indexOf('card-forward-button')) {
      // handlerMoveCardForward(event.target.id)
    }

    // событие нажатия кнопки "переместить карточку назад"
    if (event.target.id.indexOf('card-back-button')) {
      // handlerMoveCardBack(event.target.id)
    }
  })

  // вешаем слушателей на header доски
  domElements.boardHeader.addEventListener('click', (event) => {
    // событие нажатия кнопки удаления доски в шапке доски
    if (event.target.id === 'board-delete-button') {
      // handlerDeleteBoard()
    }

    // событие нажатия кнопки settings в шапке доски
    if (event.target.id === 'board-settings-button') {
      // handlerChangeBoardSettings()
    }

    // событие нажатия кнопки users в шапке доски
    if (event.target.id === 'users-bar-button') {
      handlerEditBoardUsersList()
    }
  })
}
