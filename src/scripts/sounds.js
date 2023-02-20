

const root = document.querySelector('#root')
const click = document.createElement('div')
click.className = 'click'

root.append(click)
const sound1 = '..//../assets/sounds/swipe.mp3'
 export function soundEffect (sound){
  let s = false
  const audio = new Audio(sound);

document.querySelector('.click').addEventListener('click',function(){
if(s === false){
    s = true
    audio.play()
}
})}

// soundEffect(sound1)