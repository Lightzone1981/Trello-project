export const createUsersBar = (usersArray) => {
  const usersBar = document.createElement('div')
  usersBar.classList = 'users-bar'
  usersArray.forEach(element => {
    const newUser = document.createElement('img')
    newUser.classList = 'users-bar__image'
    newUser.src = element.src
    newUser.alt = 'user photo'
    usersBar.append(newUser)
  })
  const userButton = document.createElement('button')
  userButton.classList = 'users-bar__button'
  userButton.type = 'button'
  usersBar.append(userButton)

  return usersBar
}
