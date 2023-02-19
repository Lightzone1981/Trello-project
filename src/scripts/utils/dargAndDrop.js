import { getData, setData } from './dataUtils.js'
import { getActiveBoardIndex } from './getActiveBoardIndex.js'
import { renderPanel } from '../renderers/renderPanel.js'
import { getDomElements } from '../utils/getDomElements.js'
import { renderAllData } from '../renderers/renderAllData.js'

let draggedItem = null
export function dargAndDrop() {
  const panel = document.querySelectorAll('.panel__container')
  const card = document.querySelectorAll('.task-card')

  card.forEach((item) => {
    item.addEventListener('dragstart', () => {
      draggedItem = item
      const idNumber = draggedItem.id.split('-')[2]
      const typeCard = draggedItem.className.split('--').pop()
      const boardsArray = getData()
      const activeBoardIndex = getActiveBoardIndex()
      const domElements = getDomElements()

      if (typeCard === 'todo') {
        const cardsArray = boardsArray[activeBoardIndex].todoTasks
        cardsArray.forEach((ite, index) => {
          if (String(ite.id) === String(idNumber)) {
            ite.type = 'progress'
            boardsArray[activeBoardIndex].progressTasks.push(ite)
            cardsArray.splice(index, 1)
            setData(boardsArray)
            

            panel.forEach((i) => {
              i.addEventListener('dragover', (e) => e.preventDefault())
              i.addEventListener('dragenter', function (e) {
                e.preventDefault()
              })
              i.addEventListener('drop', function (e) {
                e.preventDefault()
                this.append(draggedItem)
                // renderPanel(domElements, 'todo')
                // renderPanel(domElements, 'progress')
                // scrollDown(domElements.donePanelContainer)
                renderAllData()
              })
            })
          }
        })
      }

      if (typeCard === 'progress') {
        const cardsArray = boardsArray[activeBoardIndex].progressTasks
        cardsArray.forEach((ite) => {
          if (String(ite.id) === String(idNumber)) {
            panel.forEach((i) => {
              i.addEventListener('dragover', (e) => e.preventDefault())
              i.addEventListener('dragenter', function (e) {
                e.preventDefault()
              })
              i.addEventListener('drop', function (e) {
                e.preventDefault()
                const panelType = i.id.split('-')[2]
                if (panelType === 'todo') {
                  cardsArray.forEach((items, index) => {
                    if (String(items.id) === String(idNumber)) {
                      items.type = 'todo'
                      boardsArray[activeBoardIndex].todoTasks.push(items)
                      cardsArray.splice(index, 1)
                      setData(boardsArray)
                      this.append(draggedItem)
                    //   renderPanel(domElements, 'progress')
                    //   renderPanel(domElements, 'todo')
                    renderAllData()
                    }
                  })
                }

                if (panelType === 'done') {
                    cardsArray.forEach((items, index) => {
                      if (String(items.id) === String(idNumber)) {
                        items.type = 'done'
                        boardsArray[activeBoardIndex].doneTasks.push(items)
                        cardsArray.splice(index, 1)
                        setData(boardsArray)
                        this.append(draggedItem)
                        // renderPanel(domElements, 'progress')
                        // renderPanel(domElements, 'done')
                        renderAllData()
                      }
                    })
                  }

              })
            })
          }
        })
      }






      

      setTimeout(() => {
        item.style.display = 'none'
        
      }, 0)
    })
    item.addEventListener('dragend', () => {
      setTimeout(() => {
        item.style.display = 'flex'
        draggedItem = null
        // renderAllData()
      }, 0)
    })
  })
  
}
