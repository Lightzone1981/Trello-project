import { getCreationDate } from './getCreationDate.js'

export function getData (key) {
  const boardsArray = [
    {
      id: Date.now(),
      title: 'Programming',
      background: 1,
      color: 'blue',
      status: 'active',
      tasksArray: [
        {
          type: 'todo',
          id: 11,
          title: 'Разработка динамической верстки',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 7,
          creationTime: '17.12.2022 18:00',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'progress',
          id: 12,
          title: 'Написание UI',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 8,
          creationTime: '17.12.2022 18:00',
          takenTime: '17.12.2022 19:30',
          completedTime: ''
        },
        {
          type: 'done',
          id: 13,
          title: 'Тест приложения',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 7,
          creationTime: '17.12.2022 18:00',
          takenTime: '17.12.2022 19:30',
          completedTime: '17.12.2022 12:30'
        },
        {
          type: 'todo',
          id: 14,
          title: '11111111',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 11,
          creationTime: '17.12.2022 18:10',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 15,
          title: '22222222',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 10,
          creationTime: '17.12.2022 18:15',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 16,
          title: '3333333',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 9,
          creationTime: '17.12.2022 18:20',
          takenTime: '',
          completedTime: ''
        }
      ],
      usersArray: [
        {
          id: 7,
          src: 'https://ingyen-hatterkep.hu/hatterkepek_tablet/szep-selena-gomez-hatterkep-53927.jpg',
          name: 'Бондарева Валерия',
          job: 'UI/UX дизайнер'
        },
        {
          id: 8,
          src: 'https://c.wallhere.com/photos/62/ca/dj_axwell_disc_jockey_house_musician_bw-578268.jpg!s',
          name: 'Ильин Александр',
          job: 'специалист по информационной безопасности'
        },
        {
          id: 9,
          src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Prison_break_2012.jpg',
          name: 'Буданов Михаил',
          job: 'системный аналитик'
        },
        {
          id: 10,
          src: 'https://eao24.ru/wp-content/uploads/2019/12/e741023e5facfa5da490e273b0d36cb9.jpg',
          name: 'Степанов Демид',
          job: 'тимлид'
        },

        {
          id: 11,
          src: 'https://cdn1.flamp.ru/87172275c0e7307aaba37ffc44179bd2_300_300.jpg',
          name: 'Соколова Ульяна',
          job: 'маркетолог'
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

export function createNewCard (cardTitle, cardDescription, cardUser) {
  const boardsArray = getData()
  const newCard = {
    type: 'todo',
    id: getUniqId(),
    title: cardTitle,
    description: cardDescription,
    user: cardUser,
    creationTime: getCreationDate(),
    getterTime: '21.12.2022 20:00'
  }
  boardsArray.forEach(item => item.tasksArray.push(newCard))
  setData(boardsArray, getUniqId())
}

export function createNewBoard (boardTitle) {
  const boardsArray = getData()
  const newBoards = {
    id: Date.now(),
    title: boardTitle,
    password: 1235,
    color: 'blue'
  }
  boardsArray.push(newBoards)
  setData(boardsArray, getUniqId())
}
