// меняет пользователя на неопределено, если пользователя нету в списке пользователей, закрепленных к доске

export const resetCardUsers = (usersArray, tasksArray) => {
  return tasksArray.map((element) => {
    const cardUser = element.user

    const result = usersArray.reduce((acc, user) => {
      if (`${cardUser}` === `${user.id}`) { ++acc }
      return acc
    }, 0)

    if (!result) { element.user = 'user is not assigned' }
    return element
  })
}
