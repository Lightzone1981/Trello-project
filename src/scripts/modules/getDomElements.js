// возвращаем обЪект с DOM эл-ми приложения
export const getDomElements = () => {
  return {
    boardHeader: document.querySelector('.board__header'),
    boardTitle: document.querySelector('.board__header-title'),
    usersBar: document.querySelector('#users-bar'),
    boardContainer: document.querySelector('.board__panels-container'),

    todoPanel: document.querySelector('#panel-todo'),
    todoCount: document.querySelector('#panel-count-todo'),
    todoPanelContainer: document.querySelector('#panel-container-todo'),

    progressPanel: document.querySelector('#panel-progress'),
    progressCount: document.querySelector('#panel-count-progress'),
    progressPanelContainer: document.querySelector('#panel-container-progress'),

    donePanel: document.querySelector('#panel-done'),
    doneCount: document.querySelector('#panel-count-done'),
    donePanelContainer: document.querySelector('#panel-container-done'),

    clockInfo: document.querySelector('#clock-info')
  }
}
