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
        },
        {
          id: 3,
          src: 'https://avt-26.foto.mail.ru/mail/sasha72-10/_avatar180?',
          name: 'Поляков Максим',
          job: 'программист'
        },
        {
          id: 4,
          src: 'https://masterklas7.2event.com/dist/img/girl.jpg',
          name: 'Троицкая Анна',
          job: 'менеджер проекта'
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
        },
        {
          id: 12,
          src: 'https://pics.loveplanet.ru/2/foto/12/52/12528c41/e7OE1Iw==_.jpg?p=aRrRiakW1Ym4X_',
          name: 'Никитин Максим',
          job: 'бизнес-аналитик'
        },
        {
          id: 13,
          src: 'https://workgirl24.com/uploads/usr/1/ts_c0aa227907711e66a13d1b413aefc345_6_0.jpg',
          name: 'Кузьмина Александра',
          job: 'рекрутер'
        },
        {
          id: 14,
          src: 'https://pics.loveplanet.ru/13/foto/c6/1a/c61ac805/eIKV99A==_.jpg?p=aCvAqvgnxKrpb_',
          name: 'Сафонов Святослав',
          job: 'Fullstack-разработчик'
        },
        {
          id: 15,
          src: 'https://pics.photographer.ru/nonstop/pics/thumbs/838/838511.jpg',
          name: 'Калачев Николай',
          job: 'Frontend-разработчик'
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
