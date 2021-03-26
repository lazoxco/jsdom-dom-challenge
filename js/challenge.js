// As a user, I should see the timer increment every second once the page has
//    loaded.

const timer = document.getElementById("counter")
const heartButton = document.getElementById("heart")

function incrementTimer(){
    let newTimer = parseInt(timer.innerText)
    newTimer += 1
    timer.innerText = newTimer
}

function decrementTimer(){
  let newTimer = parseInt(timer.innerText)
  newTimer -= 1
  timer.innerText = newTimer
}

function automaticallyIncrement(){
  setInterval(incrementTimer, 1000)
}

automaticallyIncrement()

// As a user, I can manually increment and decrement the counter using the plus
//    and minus buttons.

function manuallyIncrement(){
  const plusButton = document.querySelector('#plus')
  plusButton.addEventListener('click', incrementTimer) 
}

function manuallyDecrement(){
  const minusButton = document.querySelector('#minus')
  minusButton.addEventListener('click', decrementTimer) 
}

manuallyIncrement()
manuallyDecrement()

// As a user, I can 'like' an individual number of the counter. I should see the
//    count of the number of 'likes' associated with that number displayed.

// heartButton.addEventListener('click', likedNumber)

// };