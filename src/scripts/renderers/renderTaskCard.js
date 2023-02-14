import { createTaskCard } from '../components/taskCard.js'
import { getData } from '../utils/dataUtils.js'

// отрисовывает карточку задачи в соответствиями с типом панели и данными карточки
export const renderTaskCard = (panelType, cardObject) => {
  const boardsArray = getData()
  const usersArray = boardsArray[0].usersArray

  const panelContainer = document.querySelector(`#panel-container-${panelType}`)

  const card = createTaskCard(cardObject.id, panelType)
  panelContainer.append(card)

  const taskCardTitle = document.querySelector(`#task-card-title-${cardObject.id}`)
  taskCardTitle.innerText = cardObject.title

  const taskCardDescription = document.querySelector(`#task-card-description-${cardObject.id}`)
  taskCardDescription.innerText = cardObject.description

  const taskCardUserImg = document.querySelector(`#task-card-user-img-${cardObject.id}`)
  const userImgContainer = document.querySelector(`#task-card-user-img-container-${cardObject.id}`)

  const taskCardTime = document.querySelector(`#task-card-time-${cardObject.id}`)
  taskCardTime.innerText = `created: ${cardObject.creationTime}`

  const taskCardUser = document.querySelector(`#task-card-user-name-${cardObject.id}`)

  if (cardObject.user !== 'user is not assigned') {
    usersArray.forEach(element => {
      if (element.id === cardObject.user) {
        taskCardUser.innerText = element.name
        taskCardUserImg.src = element.src
      }
    })
  } else {
    taskCardUser.innerText = 'user is not assigned'
    taskCardUserImg.remove()
    userImgContainer.remove()
  }
}
