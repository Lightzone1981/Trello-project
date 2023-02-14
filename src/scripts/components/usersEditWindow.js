import { createButton } from './button.js'

export const createUsersEditWindow = () => {
  const usersEditWrapper = document.createElement('div')
  usersEditWrapper.classList = 'users-edit-wrapper'

  const usersEditWindow = document.createElement('div')
  usersEditWindow.classList = 'users-edit'
  usersEditWrapper.append(usersEditWindow)

  const usersEditHeader = document.createElement('p')
  usersEditHeader.classList = 'users-edit__header'

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
  document.body.style.overflow = 'hidden'
  root.append(usersEditWrapper)
}
