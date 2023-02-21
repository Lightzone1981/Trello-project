import { getData } from './dataUtils.js'

// возвращает индекс активной доски в массиве всех досок
export const getActiveBoardIndex = () => {
  const boardsArray = getData()

  const activeIndex = boardsArray.reduce((res, element, index) => {
    if (element.status === 'active') {
      res = index
    }
    return res
  }, 0)
  return activeIndex
}
