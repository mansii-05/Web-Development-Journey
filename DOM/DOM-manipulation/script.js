//=============DOM MANIPULATION=================

//----------------------selection of an element----------------------

//only selects 1st element
const H1 = document.querySelector("h1")
console.log(H1) //kabhi tag to kabhi object deta h console pe
console.dir(H1) //always shows object

//selects all element
const H2 = document.querySelectorAll("h2")
console.dir(H2)

//select single element --> getElementBy...
//select multiple element --> getElementsBy....
const h1 = document.getElementsByTagName("h1")
console.log(h1)

const h2 = document.getElementsByTagName("h2")
console.log(h2)

const byId = document.getElementById("what")
console.log(byId)

const byClass = document.getElementsByClassName("guys")
console.log(byClass)

//use querySelector in general (#id) (.className) (tagname)

//----------------------changing HTML----------------------

const ah1= document.querySelector("h1")
ah1.innerHTML = "<p>Lorem ipsum dolor.</p>" 
console.log(ah1)

const ah2= document.querySelector("h2")
ah2.innerText = "<p>Lorem ipsum dolor.</p>"
console.log(ah2)

const ah22= document.querySelector("#what")
ah22.textContent = "<p>Lorem ipsum dolor.</p>"
console.log(ah22)
