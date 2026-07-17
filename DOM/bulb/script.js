const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

btn.addEventListener('click', ()=>{
    if(bulb.classList.toggle("light")){        
        btn.textContent= "ON" 
    }     
    else{
        btn.textContent ="OFF"       
    }
})