import { createButton } from './button.js'
import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

export const createUsersEditWindow = () => {
  const mainColor = getActiveBoardColor('normal')

  const usersEditWrapper = document.createElement('div')
  usersEditWrapper.classList = 'users-edit-wrapper'

  const usersEditWindow = document.createElement('div')
  usersEditWindow.classList = 'users-edit'
  usersEditWindow.style.borderColor = mainColor
  usersEditWrapper.append(usersEditWindow)

  const usersEditHeader = document.createElement('p')
  usersEditHeader.classList = 'users-edit__header'
  usersEditHeader.style.background = mainColor

  const usersAddForm = document.createElement('form')
  usersAddForm.classList = 'users-edit__add-form'

  const newUserSelect = document.createElement('select')
  newUserSelect.classList = 'users-edit__select'
  newUserSelect.name = 'users-edit-select'

  usersAddForm.append(newUserSelect,
    createButton('user-edit-select-button', 'user-edit__button', 'Add to project', 'submit', '', 'fill'))

  const usersEditContainer = document.createElement('ul')
  usersEditContainer.classList = 'users-edit__container'

  usersEditWindow.append(usersEditHeader, usersAddForm, usersEditContainer,
    createButton('user-edit-save-button', 'user-edit__button', 'Save', 'button', 'Save changes', 'fill'),
    createButton('user-edit-cancel-button', 'user-edit__button', 'Cancel', 'button', 'Cancel changes', 'fill'))

  const root = document.querySelector('#root')
  document.body.style.overflow = 'hidden'
  root.append(usersEditWrapper)
}
