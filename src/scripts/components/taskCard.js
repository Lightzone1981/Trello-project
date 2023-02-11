import { createButton } from '../components/button.js'

// верстка карточки задания
export function createTaskCard (cardId, cardType) {
  const taskCard = document.createElement('div')
  taskCard.className = `task-card task-card--${cardType}`
  taskCard.id = `task-card-${cardId}`

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

  const taskCardUserImg = document.createElement('img')
  taskCardUserImg.className = 'task-card__user-img'
  taskCardUserImg.id = `task-card-user-img-${cardId}`
  taskCardUserImg.src = '#'
  taskCardUserImg.alt = 'user photo'
  taskCardUserContainer.append(taskCardUserImg)

  const taskCardUserName = document.createElement('p')
  taskCardUserName.className = 'task-card__user-name'
  taskCardUserName.id = `task-card-user-name-${cardId}`
  taskCardUserContainer.append(taskCardUserName)

  const taskCardTime = document.createElement('p')
  taskCardTime.className = 'task-card__time'
  taskCardTime.id = `task-card-time-${cardId}`
  taskCardFooter.append(taskCardTime)

  const taskCardButtonsContainer = document.createElement('div')
  taskCardButtonsContainer.className = 'task-card__buttons-container'
  taskCard.append(taskCardButtonsContainer)

  // кнопки(удаления, редактирования, вперед, назад)
  taskCardButtonsContainer.append(createButton(cardId, 'card__button card__button-delete', '', 'button'))

  const divider = document.createElement('div')
  divider.className = 'task-card__container-divider'

  if (cardType === 'todo') {
    taskCardButtonsContainer.append(createButton(cardId, 'card__button card__button-edit', '', 'button'))
    taskCardButtonsContainer.append(divider)
    taskCardButtonsContainer.append(createButton(cardId, 'card__button card__button-move-forward', '', 'button'))
  }
  if (cardType === 'progress') {
    taskCardButtonsContainer.append(divider)
    taskCardButtonsContainer.append(createButton(cardId, 'card__button card__button-move-forward', '', 'button'))
    taskCardButtonsContainer.append(createButton(cardId, 'card__button card__button-move-back', '', 'button'))
  }

  return taskCard
}
