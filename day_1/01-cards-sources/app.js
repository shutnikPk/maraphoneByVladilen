const slides = document.querySelectorAll('.slide')
const button = document.querySelector('button')

for (const slide of slides){
    slide.addEventListener('click',()=>{
        
        clearActiveClasses()

        slide.classList.add('active')
    })
}
function clearActiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}

button.addEventListener('click', clearActiveClasses)