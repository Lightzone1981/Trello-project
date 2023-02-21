import { getDomElements } from '../utils/getDomElements.js'

export const handlerWindowResize = (elem) => {
  const domElements = getDomElements()
  if (window.innerWidth < 768) {
    domElements.todoPanel.removeAttribute('disable', '')
    domElements.progressPanel.setAttribute('disable', '')
    domElements.donePanel.setAttribute('disable', '')
    domElements.switchPanelLeft.style.display = 'block'
    domElements.switchPanelRight.style.display = 'block'
    domElements.switchPanelLeft.setAttribute('disable', '')
    domElements.switchPanelRight.removeAttribute('disable', '')
  } else {
    domElements.todoPanel.removeAttribute('disable', '')
    domElements.progressPanel.removeAttribute('disable', '')
    domElements.donePanel.removeAttribute('disable', '')
    domElements.switchPanelLeft.style.display = 'none'
    domElements.switchPanelRight.style.display = 'none'
  }
}
