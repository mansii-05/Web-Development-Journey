//----------------------------PROTOTYPE-----------------------------------------

//---------------------Array---------------------------------------
var arr = ["A", 10, true]
console.log(arr.__proto__) //array, ab iska bhi proto hoga,..
console.log(arr.__proto__.__proto__) //object, iska bhi prototype hoga null
console.log(arr.__proto__.__proto__.__proto__) //null

//------------------------Object-------------------------------------------

var obj = {
    name: "Bob"
}
console.log(obj.__proto__) //object, iska bhi prototype hoga null
console.log(obj.__proto__.__proto__) //null

//------------------------Function------------------------------------

var func = function(){
    console.log("I am a function")
}
console.log(func.__proto__) //function, iska bhi prototype hoga object
console.log(func.__proto__.__proto__) //object
console.log(func.__proto__.__proto__.__proto__) //null

//---------------------------General form---------------------------------

console.log(Array.prototype.__proto__) //Array --> Array --> Object
console.log(Object.prototype) //Object --> Object
console.log(Array.prototype.__proto__) //Function --> function --> Object

//------------------------------Example------------------------------------

var company = {
    foundingYear : 2022,
    age : 4,
    company : "ABC",
    saySlogan: function(){
        console.log("we teach..")
    }
}

var user = {
    name: "Mansi",
    age : 21
}

console.log(user.__proto__) //object
console.log(company.saySlogan.__proto__)  //function

user.__proto__ = company; //we can change prototypeee. This is called prototype inheritance
console.log(user.__proto__)  //it will give the object of company
console.log(user.company) //it is accessing value from it's new object (It inherits from object named company)
console.log(user.age) //21 (takes nearest value)

//-------------------------Protoypal Inheritance/Chaining-----------------------------------

var parent = {
    college: "IIT",
    students : 5000,
    slogan: "We are IITians"
}
var child = {
    branch: "CSE",
    subjects: ["TOC", "CD","DSA","Java"],
    role: "abc"
}
var grandChild = {
    name: "student",
    section : 'A',
    role: "xyz"
}

//Before prototype inheritance/chaining
console.log(grandChild.name) // student
console.log(grandChild.branch) // undefined
console.log(grandChild.college) // undefined

//After prototype inheritance/chaining
grandChild.__proto__ = child;
child.__proto__ = parent;

console.log(grandChild.branch) // CSE
console.log(grandChild.college) // IIT
console.log(grandChild.role) // "xyz" not "abc", cox it looks for nearest value first, if not  found, then checks in iots prototype

