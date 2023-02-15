import { getActiveBoardColor } from '../utils/getActiveBoardColor.js'

// создаёт компонент кнопки с полученными параметрами
export function createButton (id, className, text, type, title, buttonBackground) {
  const button = document.createElement('button')
  button.className = className
  button.id = id
  button.textContent = text
  button.type = type
  button.title = title
  if (buttonBackground === 'fill') {
    button.style.backgroundColor = getActiveBoardColor('transparent')

    button.onmouseover = function () {
      button.style.backgroundColor = getActiveBoardColor('normal')
    }
    button.onmouseout = function () {
      button.style.backgroundColor = getActiveBoardColor('transparent')
    }
  }

  return button
}
