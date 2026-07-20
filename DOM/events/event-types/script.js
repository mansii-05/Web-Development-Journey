//===================Events============================

const btn = document.querySelector('button')


//===================pointer event : 'click'=============================
btn.addEventListener('click' , (events) => {
    console.log("pointer event") //when i click, i get pointer event
})


//==========================mouse events==================================

//-----------------------------1. 'dblclick'----------------------------- 
btn.addEventListener( 'dblclick', (e) => {
    console.log("double click") //on double click, i get pointer Event--> mouse event
})

//-------------------------2. mouseover : when i hover over it-----------------
btn.addEventListener( 'mouseover' , (e) =>{
    console.log("mouse over") //mouse event
})

//-------------------------3. mouseleave : when i leave it---------------------
btn.addEventListener( 'mouseleave' , (e) =>{
    console.log("mouse leave") //mouse event
})

//==========================keyboard events (window pe lagega)===============

//keypress
window.addEventListener( 'keypress' , (e) => {
    console.log("keypress", e.key)
})

//keydown
window.addEventListener( 'keydown' , (e) => {
    console.log("keydown", e.key)
})

//keyup
window.addEventListener( 'keyup' , (e) => {
    console.log("keyup", e.key)
})