import '../styles/index.scss'
import { initApp } from './initApp.js'
// import { createUsersEditWindow } from './components/usersEditWindow.js'
// import { initEditCardModalWindow } from './components/editCardModalWindow.js'
//  import { initConfirmModalWindow } from './components/confirmModalWindow.js'
//  import { createBoardSettingsWindow } from './components/boardSettingsWindom.js'

const root = document.querySelector('#root')

initApp(root)
// createBoardSettingsWindow()
// createUsersEditWindow()
// initEditCardModalWindow('14')
//  initConfirmModalWindow('Convey something')
