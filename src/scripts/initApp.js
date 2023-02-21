import { createMainLayout } from './components/mainLayout.js'
import { renderAllData } from './renderers/renderAllData.js'
import { initAllListeners } from './listeners/initAllListeners.js'
import { initSoundsElements } from './utils/sounds.js'
// инициализация приложения
export function initApp (root) {
  initSoundsElements()
  createMainLayout(root)
  renderAllData()
  initAllListeners()
}
