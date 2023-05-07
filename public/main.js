const trash = document.getElementsByClassName("delete");
const page = document.querySelector('body');
const textarea = document.querySelector('textarea');
const buttons = document.querySelectorAll('.change')
buttons.forEach(button => button.addEventListener('click', changeColor))

function changeColor(e){
const _id = e.target.value 
const newColor = Math.floor(Math.random()*16777215).toString(16)
console.log(_id, newColor)
  fetch('changeColor', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    _id, newColor
    })
  }).then(function (response) {
    window.location.reload()
  })
}


// have the user type their feelings and thoughts and have the font color change depending on the mood of the writer. 

// user types feelings

// grab the innerText 

// filter through words that user is typing

// change color based on what the user has typed. 


let red = ['mad', 'angry', 'upset']
let blue = ['sad', 'depressed', 'disappointed']
let yellow = ['excited', 'happy', 'joyful']
let purple = ['peaceful', 'relaxed', 'grateful']
let grey = ['bored']

let colors = [red, blue, yellow, purple, grey]

function colorChange(){
let words = textarea.value
let emotions = {red:0, blue:0, yellow:0, purple:0, grey:0, white:0}
words.split(' ').forEach(word => {
if (red.includes(word)) {
  emotions['red']++
} else if (blue.includes(word)) {
  emotions['blue']++
} else if (yellow.includes(word)) {
  emotions['yellow']++
} else if (purple.includes(word)) {
  emotions['purple']++
} else if (grey.includes(word)) {
  emotions['grey']++
}
})
let backgroundColor = 'white'
for (const emotion in emotions){
if (emotions[backgroundColor] < emotions[emotion]) {
  backgroundColor = emotion
}
}
page.style.backgroundColor = backgroundColor
}


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(e){
        const _id = e.target.value
        console.log('working',_id)
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
