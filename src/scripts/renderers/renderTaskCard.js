import { createTaskCard } from '../components/taskCard.js'
import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getAllUsers } from '../utils/getAllUsers.js'

// отрисовывает карточку задачи в соответствиями с типом панели и данными карточки
export const renderTaskCard = (panelType, cardObject) => {
  const boardsArray = getData()

  const usersArray = boardsArray[getActiveBoardIndex()].usersArray
  const allUsers = getAllUsers()

  const panelContainer = document.querySelector(`#panel-container-${panelType}`)

  const card = createTaskCard(cardObject.id, panelType)
  panelContainer.append(card)

  const taskCardTitle = document.querySelector(`#task-card-title-${cardObject.id}`)
  taskCardTitle.innerText = cardObject.title

  const taskCardDescription = document.querySelector(`#task-card-description-${cardObject.id}`)
  taskCardDescription.innerText = cardObject.description

  const taskCardUserImg = document.querySelector(`#task-card-user-img-${cardObject.id}`)
  const userImgContainer = document.querySelector(`#task-card-user-img-container-${cardObject.id}`)

  const taskCardCreateTime = document.querySelector(`#task-card-create-time-${cardObject.id}`)
  const taskCardTakeTime = document.querySelector(`#task-card-take-time-${cardObject.id}`)
  const taskCardCompleteTime = document.querySelector(`#task-card-complete-time-${cardObject.id}`)
  taskCardCreateTime.innerText = `created: ${cardObject.creationTime}`

  if (cardObject.takenTime !== '') {
    taskCardTakeTime.innerText = `taken: ${cardObject.takenTime}`
  }

  if (cardObject.completedTime !== '') {
    taskCardCompleteTime.innerText = `completed: ${cardObject.completedTime}`
  }

  const taskCardUser = document.querySelector(`#task-card-user-name-${cardObject.id}`)

  if (panelType === 'done') {
    allUsers.forEach(element => {
      if (`${element.id}` === `${cardObject.user}`) {
        taskCardUser.innerText = element.name
        taskCardUserImg.src = element.src
      }
    })
  } else {
    if (cardObject.user !== 'user is not assigned') {
      usersArray.forEach(element => {
        if (`${element.id}` === `${cardObject.user}`) {
          taskCardUser.innerText = element.name
          taskCardUserImg.src = element.src
        }
      })
    } else {
      taskCardUser.remove()
      userImgContainer.remove()
    }
  }
}
