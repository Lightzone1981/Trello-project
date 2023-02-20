import { createSplashScreen } from '../components/splashScreen.js'
import { getDomElements } from '../utils/getDomElements.js'

export const handlerShowSplashScreen = () => {
  const root = document.querySelector('#root')
  root.prepend(createSplashScreen())
  const domElements = getDomElements()
  domElements.splash.style.position = 'absolute'
  domElements.splash.style.zIndex = '150'
  domElements.splash.style.backgroundColor = 'rgba(0,0,0,0.9)'

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      domElements.splash.remove()
    }
  }, true)

  window.addEventListener('click', (event) => {
    if (event.target !== domElements.boardHeaderLogo) { domElements.splash.remove() }
  })

  const bug = document.querySelector('#bug')
  bug.addEventListener('mouseover', () => {
    domElements.bugSound.play()
  })
}
