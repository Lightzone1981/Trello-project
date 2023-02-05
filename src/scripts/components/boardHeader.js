export function createBoardHeader () {
  const boardHeader = {
    title: 'task 1',
    usersAvatars: []
  }

  const boardHeaderDiv = document.createElement('header')
  boardHeaderDiv.className = 'board__header'

  const boardHeaderTitle = document.createElement('h1')
  boardHeaderTitle.className = 'board__header-title'
  boardHeaderTitle.innerText = boardHeader.title

  const boardHeaderAvatarsDiv = document.createElement('div')
  boardHeaderAvatarsDiv.className = ' board_users-Avatars'
  boardHeader.usersAvatars.forEach((avatar) => {
    const userAvatar = document.createElement('img')
    userAvatar.className = 'users-Avatars'
    userAvatar.src = avatar.src
    userAvatar.alt = avatar.alt
    boardHeaderAvatarsDiv.append(userAvatar)
  })

  const boardMenuButton = document.createElement('button')
  boardMenuButton.className = 'board__menu-button'
  boardMenuButton.type = 'button'
  boardMenuButton.innerHTML = 'icons'

  boardHeaderDiv.append(boardHeaderTitle, boardHeaderAvatarsDiv, boardMenuButton)

  return boardHeaderDiv
}
