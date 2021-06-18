const board = document.querySelector('#board')
const colors = ['#ff4d4d', '#4da6ff', '#99ff99', '#ffffcc', '#ff99cc']
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })

    board.append(square)
}

function setColor(element){
    const color = getRandomColor(colors)
    element.style.backgroundColor = color  
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor(arrColors){    
    return arrColors[Math.floor(Math.random()*arrColors.length)]    
}