export function fillSelectList (allUsers, newUserSelect) {
  newUserSelect.innerHtml = ''
  const selectItem = document.createElement('option')
  selectItem.innerText = '----  select new user  ----'
  newUserSelect.append(selectItem)

  allUsers.forEach((element, index) => {
    const newSelectItem = document.createElement('option')
    newSelectItem.value = `value${index}`
    newSelectItem.innerText = element.name
    newUserSelect.append(newSelectItem)
  })
}
