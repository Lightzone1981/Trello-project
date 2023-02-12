export function fillSelectList (allUsers, newUserSelect) {
  newUserSelect.innerHTML = ''
  console.log(newUserSelect)

  const selectItem = document.createElement('option')
  selectItem.innerText = '----  select new user  ----'
  newUserSelect.append(selectItem)

  allUsers.forEach((element, index) => {
    const newSelectItem = document.createElement('option')
    newSelectItem.value = element.name
    newSelectItem.innerText = element.name
    newUserSelect.append(newSelectItem)
  })
}
