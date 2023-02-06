function updateTime (t) {
  if (t < 10) {
    return '0' + t
  } else {
    return t
  }
}

// создаёт компонент часы
export const createClock = () => {
  const date = new Date()

  const clock = document.createElement('div')
  clock.className = 'clock'

  const clockInfo = document.createElement('p')
  clockInfo.className = 'clock__info'
  clockInfo.innerText = `${updateTime(date.getHours())} : ${updateTime(date.getMinutes())} : ${updateTime(date.getSeconds())}`
  setTimeout(createClock, 1000)

  clock.append(clockInfo)
  return clock
}
