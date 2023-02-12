// import { initEditCardModalWindow } from 'src/scripts/components/editCardModalWindow.js'
//import { createButton } from '../components/button'
import { getData } from '../utils/dataUtils.js'

export function handlerEditCard(cardId){
    
    const boardObjects = getData()
    const arrayCards = boardObjects[0].tasksArray
    const idNumber = cardId.split('-')[0]
    console.log(idNumber)
   
    
}
    // const boardObjects = getData()
    // const arrayCards = boardObjects[0].tasksArray
    // arrayCards.forEach(item => {
    //     if (item.type === 'todo') {
    //         console.log(item.id)
    //     }
    // }
    // )
    // const button = document.getElementsByTagName("button")
    // console.log(button)
    // const buttonClass = document.getElementsByClassName(".card__button-edit")
    // console.log(buttonClass)
    
    // const btn = button
    
    // const res = button.filter(button => button.class)
    // button.forEach(item =>{
    //     console.log(item.id)
    // })
        
 