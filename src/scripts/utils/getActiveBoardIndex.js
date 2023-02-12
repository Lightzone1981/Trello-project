import { getData } from './dataUtils.js'

export const getActiveBoardIndex = () => {
  const boardsArray = getData()

  const activeId = boardsArray.reduce((res, element, index) => {
    if (element.status === 'active') {
      res = index
    }
    return res
  }, 0)
  return activeId
}
