// console.log(Window)
// console.log(React) //without including react cdn, this will give error

// //react ke elemts ko hum directly dom tree me nhi la sakte, we use reactdom to render react elements in dom tree

// //1. create elem using react
// let div = React.createElement("div" , {id: "props"}, 
//     React.createElement("h2", {}, 
//         React.createElement("span", {}, "I'm span")
//     )
// )
// //But ye element abhi dom tree me render nhi hua h kyuki ye abhi react ellement h, we need to use reactdom to render it to the real dom tree. we ned a roott element for this.
// //selecting a html element to be a root elem to render react

// let RealElem = document.querySelector(".root")
// let root = ReactDOM.createRoot(RealElem)

// //rendering react elem in dom tree
// root.render(div) //now, this div will contain complete react element tree and will be rendered in dom tree

let h1 = document.createElement("h1")
h1.textContent = "Hii"
let rhh1 = React.createElement("h1", {id: "heading"}, "Hello")
document.body.append(rhh1)
console.log(rhh1)

// use import and export to use functions, variables from other js files. script type must be module to implement this or else it will give error.

import {sum, name} from "./main.js"
console.log(sum(2,3))
console.log(name)