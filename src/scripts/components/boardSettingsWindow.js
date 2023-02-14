import { createButton } from './button.js'
import { getData } from '../utils/dataUtils.js'
import { getActiveBoardIndex } from '../utils/getActiveBoardIndex.js'
import { getColors } from '../utils/getColors.js'
import { getBackgrounds } from '../utils/getBackgrouds.js'

export const createBoardSettingsWindow = () => {
  const boardSettingsWrapper = document.createElement('div')
  boardSettingsWrapper.classList = 'board-settings-wrapper'

  const boardSettingsWindow = document.createElement('div')
  boardSettingsWindow.classList = 'board-settings'
  boardSettingsWrapper.append(boardSettingsWindow)

  const boardSettingsHeader = document.createElement('p')
  boardSettingsHeader.classList = 'board-settings__header'
  boardSettingsHeader.innerText = 'board settings'
  boardSettingsWindow.append(boardSettingsHeader)

  const boardSettingsForm = document.createElement('form')
  boardSettingsForm.classList = 'board-settings__form'
  boardSettingsWindow.append(boardSettingsForm)

  const boardSettingsFormContainer = document.createElement('div')
  boardSettingsFormContainer.classList = 'board-settings__form-container'

  boardSettingsForm.append(boardSettingsFormContainer)

  const boardSettingsTitleHeader = document.createElement('p')
  boardSettingsTitleHeader.classList = 'board-settings__title-header'
  boardSettingsTitleHeader.innerText = 'Title'

  const boardSettingsTitle = document.createElement('input')
  boardSettingsTitle.className = 'board-settings__title'
  boardSettingsTitle.type = 'text'
  boardSettingsTitle.focus = true
  boardSettingsFormContainer.append(boardSettingsTitleHeader, boardSettingsTitle)

  //  контейнер с backround
  const boardSettingsBackgroundContainer = document.createElement('div')
  boardSettingsBackgroundContainer.classList = 'board-settings__background-container'
  boardSettingsFormContainer.append(boardSettingsBackgroundContainer)

  const boardSettingsBackgroundHeader = document.createElement('p')
  boardSettingsBackgroundHeader.classList = 'board-settings__background-header'
  boardSettingsBackgroundHeader.innerText = 'Background'
  boardSettingsBackgroundContainer.append(boardSettingsBackgroundHeader)

  const backgrounds = getBackgrounds()
  const boardsArray = getData()
  const activeBoardIndex = getActiveBoardIndex()

  boardSettingsTitle.value = boardsArray[activeBoardIndex].title

  const boardBackground = boardsArray[activeBoardIndex].background
  //   const newBackground = BoardBackground

  for (let i = 1; i <= 12; i++) {
    const backgroundRadio = document.createElement('input')
    backgroundRadio.classList = 'board-settings__background-radio'
    backgroundRadio.id = `background-radio-${i}`
    backgroundRadio.name = 'background-radio'
    backgroundRadio.type = 'radio'

    if (`${i}` === `${boardBackground}`) {
      backgroundRadio.checked = true
    }

    const backgroundLabel = document.createElement('label')
    backgroundLabel.classList = 'board-settings__background-label'
    backgroundLabel.id = `background-label-${i}`
    backgroundLabel.name = 'background-radio'
    backgroundLabel.setAttribute('for', `${backgroundRadio.id}`)

    backgroundLabel.style.background = backgrounds[`${i}`]

    boardSettingsBackgroundContainer.append(backgroundRadio, backgroundLabel)
  }

  //  контейнер с colors

  const boardSettingsColorsContainer = document.createElement('div')
  boardSettingsColorsContainer.classList = 'board-settings__colors-container'
  boardSettingsFormContainer.append(boardSettingsColorsContainer)

  const boardSettingsColorsHeader = document.createElement('p')
  boardSettingsColorsHeader.classList = 'board-settings__colors-header'
  boardSettingsColorsHeader.innerText = 'Main color'
  boardSettingsColorsContainer.append(boardSettingsColorsHeader)

  const colors = getColors()
  const boardColor = boardsArray[activeBoardIndex].color
  //   const newColor = boardColor

  for (let i = 1; i <= 12; i++) {
    const colorsRadio = document.createElement('input')
    colorsRadio.classList = 'board-settings__colors-radio'
    colorsRadio.id = `colors-radio-${i}`
    colorsRadio.name = 'colors-radio'
    colorsRadio.type = 'radio'
    if (`${i}` === `${boardColor}`) {
      colorsRadio.checked = true
    }

    const colorsLabel = document.createElement('label')
    colorsLabel.classList = 'board-settings__colors-label'
    colorsLabel.id = 'colors-label-c'
    colorsLabel.name = 'colors-radio'
    colorsLabel.setAttribute('for', `${colorsRadio.id}`)
    colorsLabel.style.background = colors[`${i}`].normal

    boardSettingsColorsContainer.append(colorsRadio, colorsLabel)
  }

  boardSettingsForm.append(
    createButton('board-settings-save-button', 'board-settings__button', 'Save', 'button'),
    createButton('board-settings-cancel-button', 'board-settings__button', 'Cancel', 'button'))

  const root = document.querySelector('#root')
  root.append(boardSettingsWrapper)
  document.body.style.overflow = 'hidden'
}
