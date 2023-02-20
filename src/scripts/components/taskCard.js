import { createButton } from '../components/button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

// верстка карточки задания
export function createTaskCard (cardId, cardType) {
  const taskCard = document.createElement('div')
  taskCard.className = `task-card task-card--${cardType}`
  taskCard.id = `task-card-${cardId}`
  if (cardType === 'todo' || cardType === 'progress') { taskCard.draggable = 'true' }

  const taskCardInfoContainer = document.createElement('div')
  taskCardInfoContainer.className = 'task-card__info-container'
  taskCard.append(taskCardInfoContainer)

  const taskCardTitle = document.createElement('h3')
  taskCardTitle.className = 'task-card__title'
  taskCardTitle.id = `task-card-title-${cardId}`
  taskCardInfoContainer.append(taskCardTitle)

  const taskCardDescription = document.createElement('p')
  taskCardDescription.className = 'taskCard__description'
  taskCardDescription.id = `task-card-description-${cardId}`
  taskCardInfoContainer.append(taskCardDescription)

  const taskCardFooter = document.createElement('div')
  taskCardFooter.className = 'task-card__footer'
  taskCardInfoContainer.append(taskCardFooter)

  const taskCardUserContainer = document.createElement('div')
  taskCardUserContainer.className = 'task-card__user-container'
  taskCardFooter.append(taskCardUserContainer)

  const taskCardUserImgContainer = document.createElement('div')
  taskCardUserImgContainer.classList = 'task-card__user-img-container'
  taskCardUserImgContainer.id = `task-card-user-img-container-${cardId}`

  const taskCardUserImg = document.createElement('img')
  taskCardUserImg.className = 'task-card__user-img'
  taskCardUserImg.id = `task-card-user-img-${cardId}`
  taskCardUserImg.src = '#'
  taskCardUserImg.alt = 'user photo'

  taskCardUserImgContainer.append(taskCardUserImg)
  taskCardUserContainer.append(taskCardUserImgContainer)

  const taskCardUserName = document.createElement('p')
  taskCardUserName.className = 'task-card__user-name'
  taskCardUserName.id = `task-card-user-name-${cardId}`
  taskCardUserContainer.append(taskCardUserName)

  const taskCardCreateTime = document.createElement('p')
  taskCardCreateTime.className = 'task-card__time'
  taskCardCreateTime.id = `task-card-create-time-${cardId}`

  const taskCardTakeTime = document.createElement('p')
  taskCardTakeTime.className = 'task-card__time'
  taskCardTakeTime.id = `task-card-take-time-${cardId}`

  const taskCardCompleteTime = document.createElement('p')
  taskCardCompleteTime.className = 'task-card__time'
  taskCardCompleteTime.id = `task-card-complete-time-${cardId}`

  taskCardFooter.append(taskCardCreateTime, taskCardTakeTime, taskCardCompleteTime)

  const taskCardButtonsContainer = document.createElement('div')
  taskCardButtonsContainer.className = 'task-card__buttons-container'
  taskCard.append(taskCardButtonsContainer)

  // кнопки(удаления, редактирования, вперед, назад)
  taskCardButtonsContainer.append(createButton(`${cardId}-card-delete-button`, 'card__button card__button-delete', '', 'button', 'Delete card'))

  const divider = document.createElement('div')
  divider.className = 'task-card__container-divider'

  if (cardType === 'todo') {
    taskCardButtonsContainer.append(createButton(`${cardId}-card-edit-button`, 'card__button card__button-edit', '', 'button', 'Edit card'))
    taskCardButtonsContainer.append(divider)
    taskCardButtonsContainer.append(createButton(`${cardId}-card-forward-button`, 'card__button card__button-move-forward', '', 'button', 'Move to progress'))
  }
  if (cardType === 'progress') {
    taskCardButtonsContainer.append(divider)
    taskCardButtonsContainer.append(createButton(`${cardId}-card-forward-button`, 'card__button card__button-move-forward', '', 'button', 'Move to done'))
    taskCardButtonsContainer.append(createButton(`${cardId}-card-back-button`, 'card__button card__button-move-back', '', 'button', 'Move back to todo'))

    taskCardButtonsContainer.style.backgroundColor = getActiveBoardColor('normal')
  }

  return taskCard
}
