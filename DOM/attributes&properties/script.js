//attributes, properties
//getAttribute, setAttribute, removeAttribute, hasAttribute

//-------------------Attributes------------------------

const h2 = document.querySelector("#id12")
//getAttribute
let result = h2.getAttribute("id")
console.log(result) //id12

//setAttribute
h2.setAttribute("width", "200") 
console.log(h2.getAttribute("width")) //200

//removeAttribute
h2.removeAttribute("class")
console.log(h2.getAttribute("class")) //null

//hasAttribute
console.log(h2.hasAttribute("class")) //false
console.log(h2.hasAttribute("id")) //true

//----------------get value of custom attribute----------------------

let user = document.querySelector("#user-card")

console.log(user.getAttribute("custom-attribute")) //null
console.log(user.getAttribute("data-custom-attribute")) //user123

//or use "dataset"
console.log(user.dataset.customAttribute) //user123

//set new value to custom attribute
user.dataset.customAttribute = 'new456';
console.log(user.dataset.customAttribute) //new456

// .value and .getAttribute('value')

const inp = document.querySelector('input')
const butn = document.querySelector('.get')
console.log(inp.value) //abc (default value milaaa)

// JS ek br chalta h, bar bar value lene ke liye we use event listeners on button 
// on every click, we obtain the entered value
butn.addEventListener( 'click', () => {
    console.log(inp.value)
    console.log(inp.getAttribute('value')) //abc hi milegaa humeshaaa.. value change kro to bhi because attribute is static.
})