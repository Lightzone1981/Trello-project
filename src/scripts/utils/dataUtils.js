export function getData (key) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

export function setData (array, key) {
  localStorage.setItem(key, JSON.stringify(array))
}

export function getTasksCount (panelType) {
  const arrayTask = getData(panelType)
  return arrayTask.length
}

export function getUniqId () {
  return Date.now()
}
