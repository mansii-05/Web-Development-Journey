//submit prress krte hi form reload hota h --> default behaviour hai!
// to stop this, use "event.preventdefault"

const form = document.querySelector('form')

form.addEventListener('submit', (e) => { //'submit' --> form event
    console.log("form")
    console.log(e.preventDefault())
})
