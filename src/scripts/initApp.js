import { createMainLayout } from './components/mainLayout.js'
import { getDomElements } from './utils/getDomElements.js'
import { renderAllData } from './renderers/renderAllData.js'
import { initAllListeners } from './initAllListeners.js'
// инициализация приложения
export function initApp (root) {
  createMainLayout(root)
  const elem = getDomElements()
  renderAllData(elem)
  initAllListeners(elem)
}
