import React from "react"

let root = document.querySelector("#root")
let h1 = React.createElement("h1", {id: "head", className: "haha"}, 
    ["Hello, This is from react!", 
    React.createElement("p", {key: "p1"}, "Inside p tag")]
)

console.log(h1)
ReactDOM.createRoot(root).render(h1)