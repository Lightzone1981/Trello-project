export function getData (key) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

export function setData (array, key) {
  localStorage.setItem(key, JSON.stringify(array))
}

export function getTasksCount (tasksArray, panelType) {
  const tasksCount = tasksArray.filter((item) => item.type === panelType).length
  return tasksCount
}

export function getUniqId () {
  return Date.now()
}
