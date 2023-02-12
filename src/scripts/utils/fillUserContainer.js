import { createButton } from '../components/button.js'

export const fillUserContainer = (boardUsersArray, usersEditContainer) => {
  usersEditContainer.innerHTML = ''
  boardUsersArray.forEach((user) => {
    const userItem = document.createElement('li')
    userItem.classList = 'user-add__list-item'

    const userImgContainer = document.createElement('div')
    userImgContainer.classList = 'user-add__image-container'

    const userImg = document.createElement('img')
    userImg.classList = 'user-add__list-image'
    userImg.src = user.src
    userImg.alt = 'user photo'

    userImgContainer.append(userImg)

    const userInfoContainer = document.createElement('div')
    userInfoContainer.classList = 'user-add__info-container'

    const userName = document.createElement('h3')
    userName.classList = 'user-add__name'
    userName.innerText = user.name

    const userJob = document.createElement('p')
    userJob.classList = 'user-add__job'
    userJob.innerText = user.job

    userInfoContainer.append(userName, userJob)

    userItem.append(userImgContainer, userInfoContainer,
      createButton(`delete-user-button-${user.id}`, 'delete-user-button', '', 'button'))

    usersEditContainer.append(userItem)
  })
}
