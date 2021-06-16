const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.side-bar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length 


let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount-1) * 100}vh`

upBtn.addEventListener('click', ()=>{
    changeSlide('up')
})

downBtn.addEventListener('click', ()=>{
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex=(++activeSlideIndex)%slidesCount
    }
    if(direction === 'down'){
        activeSlideIndex=(--activeSlideIndex)%slidesCount
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount-1
        }
    }

    const height = container.clientHeight

    console.log(activeSlideIndex)
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}