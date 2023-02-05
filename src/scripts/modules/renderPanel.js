function renderPanel(domElements, panelType){
    const arrayCards = getData();
    getTasksCount(panelType)
    switch(panelType){
        case 'todo':
            clear(domElements.todo)
        case 'progress':
            clear(domElements.progress)
        case 'done':
            clear(domElements.done)
    }
    arrayCards.forEach(item => {
        item.renderTaskCard(domElements, cardTitle, cardDescription, creationTime,cardUser)
    });
}