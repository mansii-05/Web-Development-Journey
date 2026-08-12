console.log(Window)
console.log(React) //without including react cdn, this will give error

//react ke elemts ko hum directly dom tree me nhi la sakte, we use reactdom to render react elements in dom tree

//1. create elem using react
let div = React.createElement("div" , {id: "props"}, 
    React.createElement("h2", {}, 
        React.createElement("span", {}, "I'm span")
    )
)

//selecting a html element to be a root elem to render react

let RealElem = document.querySelector(".root")
let root = ReactDOM.createRoot(RealElem)

//rendering react elem in dom tree
root.render(div) //now, this div will contain complete react element tree and will be rendered in dom tree
