export function getData (key) {
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
      ],
      usersArray: [
        {
          id: 1,
          src: 'https://th.wallhaven.cc/lg/13/13e8dg.jpg',
          name: 'Смирнова Василиса',
          job: 'модератор форума'
        },
        {
          id: 2,
          src: 'https://i.bimbolive.com/020/18e/09f/d40228391bddc3ce8ef078d6124b5a05_profile.jpg',
          name: 'Березин Артём',
          job: 'системный администратор'
        }
      ]
    }
  ]
  return JSON.parse(localStorage.getItem(key) ?? JSON.stringify(boardsArray))
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

export function createNewCard(cardTitle, cardDescription, cardUser){
  const boardsArray = getData()
  const newCard =  {
        type: 'todo',
        id: getUniqId(),
        title: cardTitle,
        description: cardDescription,
        user: cardUser,
        creationTime: '17.12.2022 18:00',
        getterTime: '21.12.2022 20:00'
  }
  boardsArray.forEach(item => item.tasksArray.push(newCard))
  setData(boardsArray, getUniqId())
  
}

export function createNewBoard(boardTitle){
  const boardsArray = getData()
  const newBoards = {
        id: Date.now(),
        title: boardTitle,
        password: 1235,
        color: 'blue',
      }
  boardsArray.push(newBoards)
  setData(boardsArray, getUniqId())
}
