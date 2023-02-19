import { getDomElements } from '../utils/getDomElements'

export const handlerSwitchPanelLeft = () => {
  const domElements = getDomElements()
  if (!domElements.donePanel.hasAttribute('disable')) {
    domElements.donePanel.setAttribute('disable', '')
    domElements.progressPanel.removeAttribute('disable', '')
    domElements.switchPanelRight.removeAttribute('disable', '')
    return
  }

  if (!domElements.progressPanel.hasAttribute('disable')) {
    domElements.progressPanel.setAttribute('disable', '')
    domElements.todoPanel.removeAttribute('disable', '')

    domElements.switchPanelRight.removeAttribute('disable', '')
    domElements.switchPanelLeft.setAttribute('disable', '')
  }
}
