console.log("Hello")
const five = document.querySelector("#five")

five.addEventListener('click' , (e) => {
    console.log(e.target) //only gives the target element

})

//to add event listener to all btns at once, we add event listener to its parent element and console the target elements.

const parent = document.querySelector("main")
parent.addEventListener('click' , (e) => {
    console.log(e.target)  //jis btn ko click krenge wo btn console pe dikhega..
 })

//this is event delegation..