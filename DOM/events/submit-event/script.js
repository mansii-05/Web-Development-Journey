//submit prress krte hi form reload hota h --> default behaviour hai!
// to stop this, use "event.preventdefault()"

const form = document.querySelector('form')
const fname = document.querySelector('#name')
const email = document.querySelector('#email')

form.addEventListener('submit', (e) => { //'submit' --> form event
    console.log(e.preventDefault()) //prevents default reload behaviour of form
    //better approach to select input fieldss
    let fullname = fname.value;
    let gmail = email.value;
    console.log(fullname,"\n",gmail)

            //or

    console.log(e) 
    //target : form (there is a target inside SubmitEvent and also at every event)
    // 0 : input#name
    // 1 : input#email
    // 2 : button
    //we can also select input field using target
    console.log(e.target[0].value)
    console.log(e.target[1].value) 
 

    // fname.value =""
    // email.value =""
    //orr
    form.reset() //to clear the inputs of the form (better approach)
})

