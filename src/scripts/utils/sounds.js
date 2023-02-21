
const root = document.querySelector('#root')
export const initSoundsElements = () => {
  const click = document.createElement('audio')
  click.id = 'click'
  const clickSource = document.createElement('source')
  clickSource.src = './click.mp3'
  clickSource.type = 'audio/mpeg'
  click.append(clickSource)

  const wow = document.createElement('audio')
  wow.id = 'wow'
  const wowSource = document.createElement('source')
  wowSource.src = './wow.mp3'
  wowSource.type = 'audio/mpeg'
  wow.append(wowSource)

  const swipe = document.createElement('audio')
  swipe.id = 'swipe'
  const swipeSource = document.createElement('source')
  swipeSource.src = './swipe-s.mp3'
  swipeSource.type = 'audio/mpeg'
  swipe.append(swipeSource)

  const swipeLarge = document.createElement('audio')
  swipeLarge.id = 'swipe-large'
  const swipeLargeSource = document.createElement('source')
  swipeLargeSource.src = './swipe.mp3'
  swipeLargeSource.type = 'audio/mpeg'
  swipeLarge.append(swipeLargeSource)

  const ring = document.createElement('audio')
  ring.id = 'ring'
  const ringSource = document.createElement('source')
  ringSource.src = './ring.mp3'
  ringSource.type = 'audio/mpeg'
  ring.append(ringSource)

  const trash = document.createElement('audio')
  trash.id = 'trash'
  const trashSource = document.createElement('source')
  trashSource.src = './trash.mp3'
  trashSource.type = 'audio/mpeg'
  trash.append(trashSource)

  const bug = document.createElement('audio')
  bug.id = 'bug-sound'
  const bugSource = document.createElement('source')
  bugSource.src = './bug.mp3'
  bugSource.type = 'audio/mpeg'
  bug.append(bugSource)

  const error = document.createElement('audio')
  error.id = 'error'
  const errorSource = document.createElement('source')
  errorSource.src = './error.mp3'
  errorSource.type = 'audio/mpeg'
  error.append(errorSource)

  root.append(click, wow, swipe, swipeLarge, ring, trash, bug, error)
}
