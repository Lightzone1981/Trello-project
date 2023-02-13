// возвращаем обЪект с DOM эл-ми приложения
export const getDomElements = () => {
  return {
    boardsContainer: document.querySelector('#boards-container'),

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

    clockInfo: document.querySelector('#clock-info'),

    usersEditWrapper: document.querySelector('.users-edit-wrapper'),
    usersEditHeader: document.querySelector('.users-edit__header'),
    newUserSelect: document.querySelector('.users-edit__select'),
    userEditContainer: document.querySelector('.users-edit__container'),

    boardSettingsTitle: document.querySelector('.board-settings__title'),

    modalOverlay: document.querySelector('.modal-edit__overlay'),
    modalContainer: document.querySelector('.modal-edit__container'),

    modalOverlayConfirm: document.querySelector('.modal-edit__container'),
    deleteAllButton: document.querySelector('#delete-all-button')

  }
}
