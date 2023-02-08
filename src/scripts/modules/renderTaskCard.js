import { createTaskCard } from '../components/taskCard.js'

// отрисовывает карточку задачи в соответствиями с типом панели и данными карточки
export const renderTaskCard = (panelType, cardObject) => {
  const panelContainer = document.querySelector(`#panel-container-${panelType}`)

  const card = createTaskCard(cardObject.id, panelType)
  panelContainer.append(card)

  const taskCardTitle = document.querySelector(`#task-card-title-${cardObject.id}`)
  taskCardTitle.innerText = cardObject.title

  const taskCardDescription = document.querySelector(`#task-card-description-${cardObject.id}`)
  taskCardDescription.innerText = cardObject.description

  const taskCardTime = document.querySelector(`#task-card-time-${cardObject.id}`)
  taskCardTime.innerText = cardObject.creationTime

  const taskCardUser = document.querySelector(`#task-card-user-name-${cardObject.id}`)
  taskCardUser.innerText = cardObject.user
}
