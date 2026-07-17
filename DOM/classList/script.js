const h2 = document.querySelector("#head1")
h2.innerText = "I am Changed via DOM.."
console.log(h2)

//childNodes, children
const main = document.querySelector("main")
console.log(main.childNodes) //returns NodeList
console.log(main.children) //returns HTML Collection


//=================classList=========================
//1. classList.add(): add class
//2. classList.remove(): remove/delete class
//3. classList.toggle(): if yes remove, if not add
//4. classList.contain(): true/false
//5. classList.replace(): change

//does my h1 has some class??
const h1 = document.querySelector("h1")
console.log(h1.classList.contains("heading")) //false

//add class
h1.classList.add("heading") //adds heading class to h1

//replace class
h1.classList.replace("heading", "replacee") //reeplaces heading class with replacee

//toggle
h1.classList.toggle("replacee") //lagi hui h toh hta degaa..

//remove hata dega but wapas lagyegaa nhii..