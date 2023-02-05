// import { createButton } from '../components/button.js'
// Cоздание 1-ой панели нашей доски
export function createTaskCard () {
  const taskCard = document.createElement('div')
  taskCard.className = 'task-card'
  taskCard.id = 'id'

  const taskCardInfoContainer = document.createElement('div')
  taskCardInfoContainer.className = 'taskCard__info-container'
  taskCard.append(taskCardInfoContainer)

  const taskCardTitle = document.createElement('h3')
  taskCardTitle.className = 'taskCard-title'
  taskCardTitle.id = 'task-card-title-id'
  taskCardInfoContainer.append(taskCardTitle)

  const taskCardDescription = document.createElement('p')
  taskCardDescription.className = 'taskCard-description'
  taskCardDescription.id = 'task-card-description-id'
  taskCardInfoContainer.append(taskCardDescription)

  const taskCardFooter = document.createElement('div')
  taskCardFooter.className = 'taskCard-footer'
  taskCardFooter.id = 'task-card-user-id'
  taskCardInfoContainer.append(taskCardFooter)

  const taskCardUserContainer = document.createElement('div')
  taskCardUserContainer.className = 'taskCard__user-container'
  taskCardUserContainer.id = 'taskCard__user-container-id'
  taskCardFooter.append(taskCardUserContainer)

  const taskCardUserImg = document.createElement('img')
  taskCardUserImg.className = 'taskCard-user-img'
  taskCardUserImg.id = 'task-card-user-img-id'
  taskCardUserImg.src = './'
  taskCardUserImg.alt = '/'
  taskCardUserContainer.append(taskCardUserImg)

  const taskCardUserName = document.createElement('p')
  taskCardUserName.className = 'taskCard__user-name'
  taskCardUserName.id = 'task-card__user-name-id'
  taskCardUserContainer.append(taskCardUserName)

  const taskCardTime = document.createElement('p')
  taskCardTime.className = 'taskCard__time'
  taskCardTime.id = 'task-card-time-id'
  taskCardFooter.append(taskCardTime)

  const taskCardButtonsContainer = document.createElement('div')
  taskCardButtonsContainer.className = 'taskCard-buttons-container'
  taskCard.append(taskCardButtonsContainer)

  // Кнопки(удаления,ввода, вперед, назад)
  //   const taskCardButtonDelete = createButton('button{ id }', 'card__button-delete', 'text', 'type')
  //     taskCardButtonDelete.append(createButton())

  //     const taskCardButtonEdit = createButton(id, className, text, type)
  //     taskCardButtonEdit.append(createButton(id, className, text, type))

  //     const taskCardButtonEdit = createButton('button{ id }', 'card__button-edit', 'text', 'type')
  //     taskCardButtonEdit.append(createButton(id, className, text, type))

  //     const taskCardButtonEdit = createButton('button{ id }', 'card__button-edit', 'text', 'type')
  //   taskCardButtonEdit.append(createButton(id, className, text, type))
  return taskCard
}
