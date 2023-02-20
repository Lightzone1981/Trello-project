import { getData, setData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getDomElements } from '../utils/getDomElements.js'
import { renderAllData } from '../renderers/renderAllData.js'
import { getCurrentTime } from '../utils/getCurrentTime.js'
import { scrollDown } from '../utils/scrollDown.js'
import { initConfirmModalWindow } from '../components/confirmModalWindow.js'

export function handlerDragAndDrop (cardNode, cardId, cardType) {
  const panel = document.querySelectorAll('.panel__container')
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()
  const domElements = getDomElements()

  const cardsArray = boardsArray[activeBoardIndex][`${cardType}Tasks`]
  cardsArray.forEach((item, index) => {
    if (String(item.id) === String(cardId)) {
      panel.forEach((i) => {
        i.addEventListener('dragover', (e) => e.preventDefault())
        i.addEventListener('dragenter', function (e) {
          e.preventDefault()
        })
        i.addEventListener('drop', function (event) {
          event.preventDefault()

          let panelDrop = event.target.closest('#panel-todo')
          if (!panelDrop) {
            panelDrop = event.target.closest('#panel-progress')
          }
          if (!panelDrop) {
            panelDrop = event.target.closest('#panel-done')
          }

          const panelDropType = panelDrop.id.split('-').at(-1)

          switch (panelDropType) {
            case 'todo': {
              if (cardType === 'progress') {
                item.type = 'todo'
                item.takenTime = ''
                boardsArray[activeBoardIndex].todoTasks.push(item)
                cardsArray.splice(index, 1)
                setData(boardsArray)
                domElements.swipeSound.play()
              }
              break
            }

            case 'progress': {
              if (cardType === 'todo') {
                if (boardsArray[activeBoardIndex].progressTasks.length < 6) {
                  item.type = 'progress'
                  item.takenTime = getCurrentTime()
                  boardsArray[activeBoardIndex].progressTasks.push(item)
                  cardsArray.splice(index, 1)
                  setData(boardsArray)
                  domElements.swipeSound.play()
                  domElements.ringSound.play()
                } else {
                  initConfirmModalWindow(
                    "You can't add more than 6 tasks to progress panel! Please, complete progress tasks",
                    'alert'
                  )
                  const domElements = getDomElements()
                  domElements.errorSound.play()

                  window.addEventListener(
                    'keydown',
                    (event) => {
                      if (event.code === 'Escape') {
                        domElements.modalOverlay.remove()
                        document.body.style.overflow = 'auto'
                      }
                    },
                    true
                  )

                  domElements.modalConfirmContainer.addEventListener('click', (event) => {
                    if (event.target.id === 'modal-cancel') {
                      domElements.modalOverlay.remove()
                    }
                  })
                }
              }
              break
            }

            case 'done': {
              if (cardType === 'todo') {
                initConfirmModalWindow("You can't move current task to completed!", 'alert')
                const domElements = getDomElements()
                domElements.errorSound.play()

                window.addEventListener(
                  'keydown',
                  (event) => {
                    if (event.code === 'Escape') {
                      domElements.modalOverlay.remove()
                      document.body.style.overflow = 'auto'
                    }
                  },
                  true
                )

                domElements.modalConfirmContainer.addEventListener('click', (event) => {
                  if (event.target.id === 'modal-cancel') {
                    domElements.modalOverlay.remove()
                  }
                })
                break
              }

              if (cardType === 'progress') {
                initConfirmModalWindow('Move task to completed?')
                const domElements = getDomElements()
                domElements.clickSound.play()

                window.addEventListener(
                  'keydown',
                  (event) => {
                    if (event.code === 'Escape') {
                      domElements.modalOverlay.remove()
                      document.body.style.overflow = 'auto'
                    }
                  },
                  true
                )

                domElements.modalConfirmContainer.addEventListener('click', (event) => {
                  if (event.target.id === 'modal-cancel') {
                    domElements.modalOverlay.remove()
                  }
                  if (event.target.id === 'modal-confirm') {
                    domElements.modalOverlay.remove()

                    item.type = 'done'
                    item.completedTime = getCurrentTime()
                    boardsArray[activeBoardIndex].doneTasks.push(item)
                    cardsArray.splice(index, 1)
                    setData(boardsArray)
                    renderAllData()
                    const domElemUpdate = getDomElements()
                    scrollDown(domElemUpdate[`${panelDropType}PanelContainer`])
                    domElements.swipeSound.play()
                    domElements.wowSound.play()
                  }
                })
                break
              }
            }
          }
          if (panelDropType !== 'done') {
            cardNode.addEventListener('dragend', (e) => {
              e.preventDefault()

              renderAllData()
              const domElements = getDomElements()
              scrollDown(domElements[`${panelDropType}PanelContainer`])
            })
          }
        })
      })
    }
  })

  setTimeout(() => {
    cardNode.style.display = 'none'
  }, 0)

  cardNode.addEventListener('dragend', (e) => {
    e.preventDefault()
    renderAllData()
    const domElements = getDomElements()
    scrollDown(domElements[`${cardType}PanelContainer`])
  })
}
