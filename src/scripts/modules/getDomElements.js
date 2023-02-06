// возвращаем обЪект с DOM эл-ми приложения
export const getDomElements = () => {
  return {
    boardHeader: document.querySelector('.board__header'),
    boardTitle: document.querySelector('.board__header-title'),
    todoCount: '',
    progressCount: '',
    doneCount: ''

  }
}
