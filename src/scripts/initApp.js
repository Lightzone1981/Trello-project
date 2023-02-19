import { createMainLayout } from './components/mainLayout.js'
import { renderAllData } from './renderers/renderAllData.js'
import { initAllListeners } from './initAllListeners.js'
import { dargAndDrop } from './utils/dargAndDrop.js'
// инициализация приложения
export function initApp (root) {
  createMainLayout(root)
  renderAllData()
  initAllListeners()
  dargAndDrop()
}
