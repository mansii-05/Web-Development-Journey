const btn = document.querySelector("button");
const bulb = document.querySelector(".bulb");
//way 1

/* btn.addEventListener("click",()=>{
    if(btn.textContent==="OFF"){
    btn.textContent="ON";
    bulb.style.backgroundColor="yellow";
    }
    else{
       btn.textContent="OFF";
       bulb.style.backgroundColor="white"; 
    }
}) */

    //way 2
    btn.addEventListener("click", ()=>{
        if(bulb.classList.toggle("lightup")){
            btn.textContent="ON";
        }
        else{
            btn.textContent="OFF";
        }
    })