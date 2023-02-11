import { createMainLayout } from './components/mainLayout.js'
import { getDomElements } from './modules/getDomElements.js'
import { renderAllData } from './modules/renderAllData.js'
import { initAllListeners } from './modules/initAllListeners.js'
// инициализация приложения
export function initApp (root) {
  createMainLayout(root)
  const elem = getDomElements()
  renderAllData(elem)
  initAllListeners(elem)
}
