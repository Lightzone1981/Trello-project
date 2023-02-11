// создаёт компонент кнопки с полученными параметрами
export function createButton (id, className, text, type, title) {
  const button = document.createElement('button')
  button.className = className
  button.id = id
  button.textContent = text
  button.type = type
  button.title = title
  return button
}
