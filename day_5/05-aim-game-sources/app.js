const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#ff4d4d', '#4da6ff', '#99ff99', '#ffffcc', '#ff99cc']
let time = 0
let score = 0

startBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (event)=>{  
    if(event.target.classList.contains('time-btn')){
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
    }
})

board.addEventListener('click',(event)=>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame(){    
    setInterval(decreaseTime,1000)    
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    let current = --time
    time === 0 ? finishGame() : (function (){
        if(current < 10){
        current = `0${current}`
        }
        setTime(current)
    }())
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score is: <span class="primary">${score}</span></h1>`
    const retryBtn = document.createElement('button')
    retryBtn.textContent = 'retry'
    retryBtn.classList.add('button')
    board.append(retryBtn)
    retryBtn.addEventListener('click',()=>{window.location.reload(false)})
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(15, 60)
    const {width,
    height} = board.getBoundingClientRect()
    const posX = getRandomNumber(0,width-size)
    const posY = getRandomNumber(0,height-size)        
    const color = getRandomColor(colors)
    circle.classList.add('circle')
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${posY}px`
    circle.style.left = `${posX}px`
    board.append(circle)
}

function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}

function getRandomColor(arrColors){    
    return arrColors[Math.floor(Math.random()*arrColors.length)]    
}