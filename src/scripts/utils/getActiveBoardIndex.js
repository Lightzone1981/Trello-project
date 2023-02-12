import { getData } from './dataUtils.js'

export const getActiveBoardIndex = () => {
  const boardsArray = getData()
  boardsArray.forEach((element, index) => {
    if (element.status === 'active') { return index }
  })
}
