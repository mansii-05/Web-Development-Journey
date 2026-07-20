const btn = document.querySelector('button')
const main = document.querySelector('main')
const div = document.querySelector('div')
const body = document.querySelector('body')
const html = document.querySelector('html')

//event bubbling..

btn.addEventListener('click' , ()=>{
    console.log('button babbling')
})

div.addEventListener('click' , ()=>{
    console.log('div babbling')
})
html.addEventListener('click' , ()=>{
    console.log('html babbling')
})
main.addEventListener('click' , ()=>{
    console.log('main babbling')
})
body.addEventListener('click' , ()=>{
    console.log('body babbling')
})


//event capturing..
console.log("Event capturing\n")

btn.addEventListener('click' , ()=>{
    console.log('button trigerred..')
},
{capture : true})

div.addEventListener('click' , ()=>{
    console.log('div trigerred..')
},
{capture : true})

html.addEventListener('click' , ()=>{
    console.log('html trigerred..')
},
{capture : true})

main.addEventListener('click' , ()=>{
    console.log('main trigerred..')
},
{capture : true})

body.addEventListener('click' , ()=>{
    console.log('body trigerred..')
},
true)

// priority of capturing > priority of babbling