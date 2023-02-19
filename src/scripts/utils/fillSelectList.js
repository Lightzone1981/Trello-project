export function fillSelectList (allUsers, newUserSelect, userValue) {
  newUserSelect.innerHTML = ''

  const selectItem = document.createElement('option')
  selectItem.innerText = '----  select user  ----'
  selectItem.value = 'empty'
  newUserSelect.append(selectItem)

  allUsers.forEach((element, index) => {
    const newSelectItem = document.createElement('option')
    newSelectItem.value = element.id
    newSelectItem.innerText = element.name
    newUserSelect.append(newSelectItem)
  })

  if (userValue !== 'user is not assigned') {
    newUserSelect.value = `${userValue}`
  }
}
