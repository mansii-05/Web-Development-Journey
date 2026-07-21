const inp = document.querySelector('input')
const add_btn = document.querySelector('.add')
const todo = document.querySelector('.todo-list')

add_btn.addEventListener( 'click' , ()=>{

    if(inp.value.trim() === "") 
        return;
    todo.innerHTML += `<div class="list">
            <h3>${inp.value}</h3>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>`
    inp.value="" //to empty the placeholder after adding
})