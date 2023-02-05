export function createButton (id, className, text, type) {
  const button = document.createElement('button')
  button.className = className
  button.id = id
  button.textContent = text
  button.type = type
  return button
}
