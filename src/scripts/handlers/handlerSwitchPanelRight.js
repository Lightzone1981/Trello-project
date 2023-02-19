import { getDomElements } from '../utils/getDomElements'

export const handlerSwitchPanelRight = () => {
  const domElements = getDomElements()

  if (!domElements.todoPanel.hasAttribute('disable')) {
    domElements.todoPanel.setAttribute('disable', '')
    domElements.progressPanel.removeAttribute('disable', '')
    domElements.switchPanelLeft.removeAttribute('disable', '')

    return
  }

  if (!domElements.progressPanel.hasAttribute('disable')) {
    domElements.progressPanel.setAttribute('disable', '')
    domElements.donePanel.removeAttribute('disable', '')

    domElements.switchPanelLeft.removeAttribute('disable', '')
    domElements.switchPanelRight.setAttribute('disable', '')
  }
}
