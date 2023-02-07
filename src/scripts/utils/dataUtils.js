export function getData (key) {
  // return JSON.parse(localStorage.getItem(key) ?? '[]')
  const arrBoards = [
    {
      id: Date.now(),
      title: 'Programing',
      password: 1235,
      color: 'blue',
      tasksArray: [
        {
          type: 'ToDo',
          id: Date.now(),
          title: 'Разработка динамической верстки',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          creationTime: '17.12.2022 18:00',
          getterTime: '21.12.2022 20:00'
        },
        {
          type: 'Progress',
          id: Date.now(),
          title: 'Написание UI',
          description: 'Написать UI с помощью scss, использовать вложенность',
          creationTime: '20.12.2022 18:00',
          getterTime: '30.12.2022 20:00'
        },
        {
          type: 'Done',
          id: Date.now(),
          title: 'Тест приложения',
          description: 'Протестировать приложение, найти баги, составить отчет',
          creationTime: '10.12.2022 18:00',
          getterTime: '15.12.2022 20:00'
        }
      ]
    }
  ]
  return arrBoards
}

export function setData (array, key) {
  localStorage.setItem(key, JSON.stringify(array))
}

export function getTasksCount (tasksArray, panelType) {
  const tasksCount = tasksArray.filter((item) => item.tasksArray.type === panelType).length
  return tasksCount
}

export function getUniqId () {
  return Date.now()
}
