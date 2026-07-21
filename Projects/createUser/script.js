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
]

//creating user cards: dry principle is getting violated...

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

//==================create and add users =================================
let editIndex = -1; //create mode
let ui = function () {
    userData.forEach((elem , index)  => {
    user.innerHTML += `<div class="user-card">
            <div class="img-box">
                <img src="${elem.image}" alt="${elem.name}">
            </div>
            <div class="user-info">
                <h3>Name: ${elem.name}</h3>
                <h3>Email: ${elem.email}</h3>
            </div>
            <div class= "actions">
                <button onclick="editCard(${index})" id = "edit">Edit</button>
                <button onclick="delCard(${index})" id="del">Delete</button>
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

   if(editIndex == -1) {
  userData.push({
    name : naam,
    email : gmail ,
    image : imglink
  }) 
}

else {
     // Update User
        userData[editIndex].name = naam;
        userData[editIndex].email = gmail;
        userData[editIndex].image = imglink;

        editIndex = -1;
}
  user.innerHTML = ""
  ui()  //to print new users
  console.log(userData)
  form.reset();
});

//========================== delete users ============================== 
let delCard = function(index) {
    userData.splice(index, 1) 
    console.log(userData)
    user.innerHTML = ""
    ui()
}

//========================== edit users ============================== 

let editCard = function(index){
    fname.value = userData[index].name;
    email.value = userData[index].email;
    url.value = userData[index].image;

    editIndex = index;
}