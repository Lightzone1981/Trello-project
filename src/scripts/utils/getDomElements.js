// возвращаем обЪект с DOM эл-ми приложения
export const getDomElements = () => {
  return {

    mainHeader: document.querySelector('#main-header'),
    boardsContainer: document.querySelector('#boards-container'),

    boardHeader: document.querySelector('.board__header'),
    boardTitle: document.querySelector('.board__header-title'),
    usersBarWrapper: document.querySelector('#users-bar-wrapper'),
    usersBar: document.querySelector('#users-bar'),

    boardSwitcherWrapper: document.querySelector('.boards-switcher-wrapper'),
    boardSwitcher: document.querySelector('.boards-switcher'),
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

    boardSettingsWrapper: document.querySelector('.board-settings-wrapper'),
    boardSettingsTitle: document.querySelector('.board-settings__title'),

    modalContainer: document.querySelector('.modal-edit__container'),

    modalOverlay: document.querySelector('.modal-overlay'),
    editModalOverlay: document.querySelector('.edit-modal-overlay'),
    modalConfirmContainer: document.querySelector('.modal-confirm__container'),

    modalTitle: document.querySelector('.modal-edit__title'),
    modalDescription: document.querySelector('.modal-edit__description'),

    deleteAllButton: document.querySelector('#delete-all-button'),

    todoArrowTop: document.querySelector('#arrow-top-todo'),
    progressArrowTop: document.querySelector('#arrow-top-progress'),
    doneArrowTop: document.querySelector('#arrow-top-done'),

    switchPanelLeft: document.querySelector('#switch-panel-left'),
    switchPanelRight: document.querySelector('#switch-panel-right')

  }
}
