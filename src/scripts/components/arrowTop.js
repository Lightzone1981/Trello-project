// создаёт кнопку скролла наверх
export const createArrowTop = (type) => {
  const arrowTop = document.createElement('button')
  arrowTop.classList = 'arrow-top'
  arrowTop.id = `arrow-top-${type}`
  arrowTop.type = 'button'
  return arrowTop
}
