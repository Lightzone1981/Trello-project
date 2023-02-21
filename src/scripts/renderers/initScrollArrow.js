import { getDomElements } from '../utils/getDomElements'

// инициализация кнопки скролла наверх
export const initScrollArrow = (panelType) => {
  const domElements = getDomElements()
  const arrowTop = domElements[`${panelType}ArrowTop`]
  const container = domElements[`${panelType}PanelContainer`]
  arrowTop.style.bottom = '-50%'
  arrowTop.style.width = arrowTop.onclick = () => container.scrollTo({ top: 0, behavior: 'smooth' })
  container.addEventListener('scroll', () => {
    if (container.scrollTop < 50) arrowTop.style.bottom = '-50%'
    else arrowTop.style.bottom = '3rem'
  })
}
