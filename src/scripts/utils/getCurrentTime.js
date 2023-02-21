export const getCurrentTime = () => {
  const dateOptions = {
    weekend: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: 'numeric'
  }
  const now = new Date()
  const creationDate = new Intl.DateTimeFormat('en-UK', dateOptions)
  return creationDate.format(now)
}
