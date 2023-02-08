// возвращаем обЪект с DOM эл-ми приложения
export const getDomElements = () => {
  return {
    boardHeader: document.querySelector('.board__header'),
    boardTitle: document.querySelector('.board__header-title'),

    todoPanel: document.querySelector('#panel-todo'),
    todoCount: document.querySelector('#panel-count-todo'),
    todoPanelContainer: document.querySelector('#panel-todo-container'),

    progressPanel: document.querySelector('#panel-progress'),
    progressCount: document.querySelector('#panel-count-progress'),
    progressPanelContainer: document.querySelector('#panel-progress-container'),

    donePanel: document.querySelector('#panel-done'),
    doneCount: document.querySelector('#panel-count-done'),
    donePanelContainer: document.querySelector('#panel-done-container'),

    clockInfo: document.querySelector('#clock-info')
  }
}
