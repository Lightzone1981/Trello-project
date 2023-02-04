export function getData (key) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

export function setData (array, key) {
  localStorage.setItem(key, JSON.stringify(array))
}

export function getTasksCount (panelType) {
  const typePanel = getData(panelType)
  const countTasks = typePanel.length
  return countTasks
}

export function getUniqId () {
  return Date.now()
}
