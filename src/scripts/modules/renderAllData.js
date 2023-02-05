//Отрисовка todo progress done
export const renderAllData = (domElements) => {
    createBoardHeader (domElements)
    renderPanel (domElements, 'todo')
    renderPanel (domElements, 'progress')
    renderPanel (domElements, 'done')
}