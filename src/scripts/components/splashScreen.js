export const createSplashScreen = () => {
  const splash = document.createElement('div')
  splash.className = 'splash'

  const splashContainer = document.createElement('div')
  splashContainer.className = 'splash__container'
  splash.append(splashContainer)

  const tro = document.createElement('div')
  tro.className = 'tro'

  const llo = document.createElement('div')
  llo.className = 'llo'

  const lo = document.createElement('div')
  lo.className = 'lo'
  splashContainer.append(tro, llo, lo)

  const titleContainer = document.createElement('div')
  titleContainer.className = 'splash__title'

  const title = 'true task manager'
  for (let i = 0; i < title.length; i++) {
    const letter = document.createElement('span')
    letter.classList = 'letter'
    letter.id = `letter-${i}`
    letter.innerText = title[i]
    letter.style.animationDelay = `${(i + 1) / 100}s`
    titleContainer.append(letter)
  }

  const copyRight = document.createElement('div')
  copyRight.className = 'copy-right'
  copyRight.innerText = '2023 © BIG soft engineering'

  const bug = document.createElement('div')
  bug.className = 'bug'
  copyRight.append(bug)

  splash.append(titleContainer, copyRight)

  return splash
}
