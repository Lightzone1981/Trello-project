export const updateTime = () => {
  const date = new Date()
  const clockInfo = document.querySelector('#clock-info')
  const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
  const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()

  clockInfo.innerText = hours + ':' + minutes + ':' + seconds
}

// создаёт компонент часы
export const createClock = () => {
  const clock = document.createElement('div')
  clock.className = 'clock'

  const clockInfo = document.createElement('p')
  clockInfo.className = 'clock__info'
  clockInfo.id = 'clock-info'
  clock.append(clockInfo)

  setInterval(updateTime, 1000)
  return clock
}
