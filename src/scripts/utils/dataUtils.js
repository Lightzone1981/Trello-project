import { getCurrentTime } from './getCurrentTime.js'

export function getData () {
  const boardsArray = [
    {
      id: 1,
      title: 'Example',
      background: 1,
      color: 1,
      status: 'active',
      todoTasks: [
        {
          type: 'todo',
          id: 11,
          panelIndex: 0,
          title: 'Разработка динамической верстки',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 7,
          creationTime: '18 Feb, 09:32',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 12,
          panelIndex: 1,
          title: 'Написание UI',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 8,
          creationTime: '18 Feb, 09:45',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 13,
          panelIndex: 2,
          title: 'Тест приложения',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 7,
          creationTime: '18 Feb, 09:50',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 14,
          panelIndex: 3,
          title: '11111111',
          description: 'Написать на js динамическую верстку, использовать методологию бэм',
          user: 11,
          creationTime: '18 Feb, 10:20',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 15,
          panelIndex: 4,
          title: '22222222',
          description: 'Написать UI с помощью scss, использовать вложенность',
          user: 10,
          creationTime: '18 Feb, 10:50',
          takenTime: '',
          completedTime: ''
        },
        {
          type: 'todo',
          id: 16,
          panelIndex: 5,
          title: '3333333',
          description: 'Протестировать приложение, найти баги, составить отчет',
          user: 9,
          creationTime: '18 Feb, 11:14',
          takenTime: '',
          completedTime: ''
        }
      ],
      progressTasks: [],
      doneTasks: [],
      deleteTasks: [],
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
  return JSON.parse(localStorage.getItem('boardsArray')) ?? boardsArray
}

export function setData (array) {
  localStorage.setItem('boardsArray', JSON.stringify(array))
}

export function getTasksCount (tasksArray, panelType) {
  const tasksCount = tasksArray.filter((item) => item.type === panelType).length
  return tasksCount
}

export function getUniqId () {
  return Date.now()
}

export function createNewCard (cardTitle, cardDescription, cardUser) {
  return {
    type: 'todo',
    id: getUniqId(),
    panelIndex: 0,
    title: cardTitle,
    description: cardDescription,
    user: cardUser,
    creationTime: getCurrentTime(),
    takenTime: '',
    completedTime: ''
  }
}

export function createNewBoard () {
  return {
    id: getUniqId(),
    title: 'New project',
    background: 1,
    color: 1,
    status: 'disable',
    todoTasks: [],
    progressTasks: [],
    doneTasks: [],
    deleteTasks: [],
    usersArray: []
  }
}
