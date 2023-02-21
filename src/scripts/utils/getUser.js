import { getAllUsers } from './getAllUsers.js'

// возвращает объект пользователя по его ID
export const getUser = (userId) => {
  const allUsers = getAllUsers()
  return allUsers.find((user) => `${user.id}` === `${userId}`)
}
