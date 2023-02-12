import { createButton } from './button.js'
import { getData } from '../utils/dataUtils.js'

export const createUsersEditWindow = () => {
  const boardsArray = getData()

  const usersEditWrapper = document.createElement('div')
  usersEditWrapper.classList = 'users-edit-wrapper'

  const usersEditWindow = document.createElement('div')
  usersEditWindow.classList = 'users-edit'
  usersEditWrapper.append(usersEditWindow)

  const usersEditHeader = document.createElement('p')
  usersEditHeader.classList = 'users-edit__header'
  usersEditHeader.innerText = `${boardsArray[0].title}  |  users`

  const usersAddForm = document.createElement('form')
  usersAddForm.classList = 'users-edit__add-form'

  const newUserSelect = document.createElement('select')
  newUserSelect.classList = 'users-edit__select'
  newUserSelect.name = 'users-edit-select'

  usersAddForm.append(newUserSelect,
    createButton('user-edit-select-button', 'user-edit__button', 'Add to project', 'submit'))

  const usersEditContainer = document.createElement('ul')
  usersEditContainer.classList = 'users-edit__container'

  usersEditWindow.append(usersEditHeader, usersAddForm, usersEditContainer,
    createButton('user-edit-save-button', 'user-edit__button', 'Save', 'button'),
    createButton('user-edit-cancel-button', 'user-edit__button', 'Cancel', 'button'))

  const root = document.querySelector('#root')
  root.append(usersEditWrapper)
}
