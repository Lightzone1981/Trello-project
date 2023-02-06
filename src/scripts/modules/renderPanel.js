function renderPanel(domElements, panelType){
    const boardObjects = getData();
    getTasksCount(boardObjects.tasksArray, panelType)
    switch(panelType){
        case 'todo':
            clear(domElements.todo)
        case 'progress':
            clear(domElements.progress)
        case 'done':
            clear(domElements.done)
    }
    arrayCards.forEach(item => {
        item.renderTaskCard(cardTitle, cardDescription, creationTime,cardUser)
    });
}