export function getData (key) {
  // return JSON.parse(localStorage.getItem(key) ?? '[]')
  const boardsArray = [
    {
      id: Date.now(),
      title: 'Programming',
      password: 1235,
      color: 'blue',
      tasksArray: [
        {
          type: 'todo',
          id: 11,
          title: 'Разработка динамической верстки',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 'Ivan',
          creationTime: '17.12.2022 18:00',
          getterTime: '21.12.2022 20:00'
        },
        {
          type: 'progress',
          id: 12,
          title: 'Написание UI',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 'Alexander',
          creationTime: '20.12.2022 18:00',
          getterTime: '30.12.2022 20:00'
        },
        {
          type: 'done',
          id: 13,
          title: 'Тест приложения',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 'Stepan',
          creationTime: '10.12.2022 18:00',
          getterTime: '15.12.2022 20:00'
        },
        {
          type: 'todo',
          id: 14,
          title: '11111111',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 'Ivan',
          creationTime: '17.12.2022 18:00',
          getterTime: '21.12.2022 20:00'
        },
        {
          type: 'todo',
          id: 15,
          title: '22222222',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 'Alexander',
          creationTime: '20.12.2022 18:00',
          getterTime: '30.12.2022 20:00'
        },
        {
          type: 'todo',
          id: 16,
          title: '3333333',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 'Stepan',
          creationTime: '10.12.2022 18:00',
          getterTime: '15.12.2022 20:00'
        }
      ]
    }
  ]
  return boardsArray
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
