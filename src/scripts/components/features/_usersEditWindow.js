import { createButton } from '../button.js'
import { getAllUsers } from './_allUsers.js'
import { getData } from '../../utils/dataUtils.js'

function fillUserContainer (boardUsersArray) {
  const userEditContainer = document.querySelector('.user-edit__container')
  userEditContainer.innerText = ''
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

    userEditContainer.append(userItem)
  })
}

function fillSelectList (allUsers) {
  const newUserSelect = document.querySelector('.users-edit__select')
  newUserSelect.innerHtml = ''
  const selectItem = document.createElement('option')
  selectItem.innerText = '----  select new user  ----'
  newUserSelect.append(selectItem)

  allUsers.forEach((element, index) => {
    const newSelectItem = document.createElement('option')
    newSelectItem.value = `value${index}`
    newSelectItem.innerText = element.name
    newUserSelect.append(newSelectItem)
  })
}

export const createUsersEditWindow = () => {
  const allUsers = getAllUsers()
  const board = getData()
  const boardUsersArray = board[0].usersArray

  const usersEditWrapper = document.createElement('div')
  usersEditWrapper.classList = 'users-edit-wrapper'

  const usersEditWindow = document.createElement('div')
  usersEditWindow.classList = 'users-edit'
  usersEditWrapper.append(usersEditWindow)

  const usersEditHeader = document.createElement('p')
  usersEditHeader.classList = 'users-edit__header'
  usersEditHeader.innerText = `${board[0].title}  |  users`

  const usersAddForm = document.createElement('form')
  usersAddForm.classList = 'users-edit__add-form'

  const newUserSelect = document.createElement('select')
  newUserSelect.classList = 'users-edit__select'
  newUserSelect.name = 'users-edit-select'

  usersAddForm.append(newUserSelect,
    createButton('user-edit-select-button', 'user-edit__button', 'Add to project', 'submit'))

  const userEditContainer = document.createElement('ul')
  userEditContainer.classList = 'user-edit__container'

  usersEditWindow.append(usersEditHeader, usersAddForm, userEditContainer,
    createButton('user-edit-save-button', 'user-edit__button', 'Save', 'button'),
    createButton('user-edit-cancel-button', 'user-edit__button', 'Cancel', 'button'))

  const root = document.querySelector('#root')
  root.append(usersEditWrapper)

  const selectUsersArray = []
  allUsers.forEach((element) => {
    if (JSON.stringify(boardUsersArray).indexOf(JSON.stringify(element)) === -1) selectUsersArray.push(element)
  })

  fillSelectList(selectUsersArray)
  fillUserContainer(boardUsersArray)

  //  --------------  слушатели ----------------
}
