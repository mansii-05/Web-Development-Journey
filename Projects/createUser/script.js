let form = document.querySelector("form");
let fname = document.querySelector("#name");
let email = document.querySelector("#email");
let user = document.querySelector(".users");
let url = document.querySelector("#link")

let userData  = [
    {
        id : 1,        
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id : 2,
        name: "Priya Verma",
        email: "priya.verma@example.com",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id : 3,
        name: "Rahul Singh",
        email: "rahul.singh@example.com",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id : 4,
        name: "Ananya Gupta",
        email: "ananya.gupta@example.com",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id : 5,
        name: "Karan Mehta",
        email: "karan.mehta@example.com",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    }   
]

//dry principle is getting violated...

/* form.addEventListener("submit", (e) => {
  e.preventDefault();
  let naam = fname.value;
  let gmail = email.value;
  let imglink = url.value;
  if (naam.trim() == "" || gmail.trim() == "" || imglink.trim == "" ) return;

  user.innerHTML += `<div class="user-card">
            <div class="img-box">
                <img src="${imglink}" alt="cover photo">
            </div>
            <div class="user-info">
                <h3>Name: ${naam}</h3>
                <h3>Email: ${gmail}</h3>
            </div>
        </div> `;

  form.reset();
});

userData.forEach((elem)  => {
    user.innerHTML += `<div class="user-card">
            <div class="img-box">
                <img src="${elem.image}" alt="${elem.name}">
            </div>
            <div class="user-info">
                <h3>Name: ${elem.name}</h3>
                <h3>Email: ${elem.email}</h3>
            </div>
        </div> `
})

 */

let ui = function () {
    userData.forEach((elem)  => {
    user.innerHTML += `<div class="user-card">
            <div class="img-box">
                <img src="${elem.image}" alt="${elem.name}">
            </div>
            <div class="user-info">
                <h3>Name: ${elem.name}</h3>
                <h3>Email: ${elem.email}</h3>
            </div>
        </div> `
})
}
ui() //prints default users

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let naam = fname.value;
  let gmail = email.value;
  let imglink = url.value;
  if (naam.trim() == "" || gmail.trim() == "" || imglink.trim == "" ) return;

  userData.push({
    name : naam,
    email : gmail ,
    image : imglink
  })
  user.innerHTML = ""
  ui()  //to print new users
  console.log(userData)
  form.reset();
});



