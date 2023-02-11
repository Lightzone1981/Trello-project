import { createButton } from '../components/button.js'
import { getData } from '..//utils/dataUtils.js'

// верстка блока с аватарами пользователей
export function createUserBar () {
  const boardObjects = getData()
  const usersArray = boardObjects[0].usersArray

  const usersBar = document.createElement('div')
  usersBar.id = 'users-bar'
  usersBar.classList = 'users-bar'

  usersArray.forEach(element => {
    const userAvatarContainer = document.createElement('div')
    userAvatarContainer.id = `${element.id}-user-avatar-container`
    userAvatarContainer.classList = 'user-bar__avatar-container'
    userAvatarContainer.title = element.name

    const userAvatar = document.createElement('img')
    userAvatar.classList = 'user-bar__avatar'
    userAvatar.src = element.src
    userAvatar.alt = 'user photo'

    userAvatarContainer.append(userAvatar)
    usersBar.append(userAvatarContainer)
  })

  const userBarButton = createButton('users-bar-button', 'users-bar__button', '', 'button', 'Edit users list')
  usersBar.append(userBarButton)
  return usersBar
}
