import { getData, setData } from './dataUtils.js'
import { getActiveBoardIndex } from './getActiveBoardIndex.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'
import { getDomElements } from './getDomElements.js'
import { getCurrentTime } from './getCurrentTime.js'

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

      if (typeCard === 'todo') {
        const cardsArray = boardsArray[activeBoardIndex].todoTasks
        cardsArray.forEach((value, index) => {
          if (String(value.id) === String(idNumber)) {
            panel.forEach((items) => {
              items.addEventListener('dragover', (e) => e.preventDefault())
              items.addEventListener('dragenter', function (e) {
                e.preventDefault()
              })
              items.addEventListener('drop', function (e) {
                e.preventDefault()
                const panelType = items.id.split('-')[2]
                if (panelType === 'progress') {
                  if (boardsArray[activeBoardIndex].progressTasks.length < 6) {
                    value.completedTime = getCurrentTime()
                    value.type = 'progress'
                    boardsArray[activeBoardIndex].progressTasks.push(value)
                    cardsArray.splice(index, 1)
                    setData(boardsArray)
                    this.append(draggedItem)
                    renderAllData()
                  } else {
                    initConfirmModalWindow(
                      "You can't add more than 6 tasks to progress panel! Please, complete current tasks",
                      'alert',
                    )
                    const domElements = getDomElements()

                    window.addEventListener(
                      'keydown',
                      (event) => {
                        if (event.code === 'Escape') {
                          domElements.modalOverlay.remove()
                          document.body.style.overflow = 'auto'
                          renderAllData()
                        }
                      },
                      true,
                    )

                    domElements.modalConfirmContainer.addEventListener('click', (event) => {
                      if (event.target.id === 'modal-cancel') {
                        domElements.modalOverlay.remove()
                        renderAllData()
                      }
                    })
                  }
                }
                if (panelType === 'done') {
                  initConfirmModalWindow("You can't move current task to done panel", 'alert')
                  const domElements = getDomElements()
                  window.addEventListener(
                    'keydown',
                    (event) => {
                      if (event.code === 'Escape') {
                        domElements.modalOverlay.remove()
                        document.body.style.overflow = 'auto'
                        renderAllData()
                      }
                    },
                    true,
                  )
                  window.addEventListener(
                    'keydown',
                    (event) => {
                      if (event.code === 'Escape') {
                        domElements.modalOverlay.remove()
                        document.body.style.overflow = 'auto'
                        renderAllData()
                      }
                    },
                    true,
                  )
                  domElements.modalConfirmContainer.addEventListener('click', (event) => {
                    if (event.target.id === 'modal-cancel') {
                      domElements.modalOverlay.remove()
                      renderAllData()
                    }
                  })
                }
              })
            })
          }
        })
      }

      if (typeCard === 'progress') {
        const cardsArray = boardsArray[activeBoardIndex].progressTasks
        cardsArray.forEach((item) => {
          if (String(item.id) === String(idNumber)) {
            panel.forEach((value) => {
              value.addEventListener('dragover', (e) => e.preventDefault())
              value.addEventListener('dragenter', function (e) {
                e.preventDefault()
              })
              value.addEventListener('drop', function (e) {
                e.preventDefault()
                const panelType = value.id.split('-')[2]
                if (panelType === 'todo') {
                  cardsArray.forEach((item, index) => {
                    if (String(item.id) === String(idNumber)) {
                      item.completedTime = ''
                      item.type = 'todo'
                      boardsArray[activeBoardIndex].todoTasks.push(item)
                      cardsArray.splice(index, 1)
                      setData(boardsArray)
                      this.append(draggedItem)
                      renderAllData()
                    }
                  })
                }

                if (panelType === 'done') {
                  initConfirmModalWindow('Move task to completed?')
                  const domElements = getDomElements()
                  window.addEventListener(
                    'keydown',
                    (event) => {
                      if (event.code === 'Escape') {
                        domElements.modalOverlay.remove()
                        document.body.style.overflow = 'auto'
                        renderAllData()
                      }
                    },
                    true,
                  )
                  domElements.modalConfirmContainer.addEventListener('click', (event) => {
                    if (event.target.id === 'modal-cancel') {
                      domElements.modalOverlay.remove()
                      renderAllData()
                    }
                    if (event.target.id === 'modal-confirm') {
                      cardsArray.forEach((items, index) => {
                        if (String(items.id) === String(idNumber)) {
                          items.type = 'done'
                          boardsArray[activeBoardIndex].doneTasks.push(items)
                          cardsArray.splice(index, 1)
                          setData(boardsArray)
                          domElements.modalOverlay.remove()
                          this.append(draggedItem)
                        }
                      })
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
      }, 0)
    })
  })
}
