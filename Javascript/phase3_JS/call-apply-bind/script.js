//--------------------------------- call -----------------------------------------------------
console.log("call")
var student1 = {
  fname: "John ",
  lname: "Doe"
}
var student2 = {
  fname: "Abraham ",
  lname: "Lincoln"
}
var getFullname = function(){
  console.log("I am " +this.fname +" " + this.lname);
}
getFullname()
getFullname.call(student2) // this ban jayega student2 ka object

var student3 = {
  fname: "Johny ",
  lname: "Donny",
  getname: function(){
    console.log("I am " +this.fname +" " + this.lname); // this refers to student3 object
  }
}
student3.getname.call(student1) //this ban jayega student1 ka object

//--------------------------------------- apply,
// pass arguments in functions------------------------------------------------------------------------

var student4 = {
  name: "Alice",
  age: 25
}
var student5 = {
  name: "Alia",
  age: 36
}

var getInfo = function(city, country){
  console.log(`${this.name}, ${this.age} years, ${city}, (${country})`);
}
getInfo.call(student4,"New York", "USA")

console.log("\napply")
getInfo.apply(student5,["Mumbai", "India"]) //arguments are passed in array in apply unlike call, else we get type error

//-------------------------------------------bind-------------------------------------------------------

// call and apply turant function ko call kr ke value de dete hain 
// bind function ko call krta hai but turant call nahi krta, instead it returns a new function with this value binded to it. Then the function needs to be called to display the result

console.log("\nbind")
var student6 = {
  name: "Mansi",
  age: 21
}
getInfo.bind(student6, "Durg", "India") //no output because it returns a function which needs to be stored in a variable, then the function (variable) needs to be called

var result = getInfo.bind(student6, "Bhopal", "India")
result() 
console.log(result) //result is a function
console.log(result()) //undefined

