let items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
const card = document.querySelector('.add-card')
let holdenItem

function addListners(){
for (const item of items) {
    item.addEventListener('dragstart',dragstart)
    item.addEventListener('dragend',dragend)    
}
}

window.addEventListener('load',addListners)

card.addEventListener('keydown',(event)=>{if(event.key == 'Enter')  {addCard()}  })

for (const placeholder of placeholders) {
    
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)

}

function dragstart(event){
    holdenItem=event.target
    holdenItem.classList.add('hold')
    setTimeout(()=>holdenItem.classList.add('hide'), 0)
    
}

function dragend(){
    holdenItem.className = 'item'
    setTimeout(()=>holdenItem = null, 0)    
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    event.target.append(holdenItem)    
    event.target.classList.remove('hovered')
}

function addCard(){    
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.setAttribute('draggable', true)
    let  parrent = card.parentElement
    console.log(card.textContent)
    newItem.textContent = card.textContent;
    parrent.removeChild(card)
    parrent.appendChild(newItem)
    items = document.querySelectorAll('.item')
    addListners()
}