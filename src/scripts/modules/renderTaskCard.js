// Вызывает элемент. Записывает данные в дом элемент
export const renderTaskCard = (cardId, cardTitle, cardDescription, creationTime, cardUser) => {
  const taskCardTitle = document.querySelector(`#task-card-title-${cardId}`)
  taskCardTitle.innerText(cardTitle)
  const taskCardDescription = document.querySelector(`#task-card-description-${cardId}`)
  taskCardDescription.innerText(cardDescription)
  const taskCardTime = document.querySelector(`#task-card-Time-${cardId}`)
  taskCardTime.innerText(creationTime)
  const taskCardUser = document.querySelector(`#task-card-User-${cardId}`)
  taskCardUser.innerText(cardUser)
}
