//CRUD operatiion in Objects
//Creating an object
var obj = {
    name: "John",
    age : 25,
    isStudent : true,
    city: "Bhopal",
    //object inside object
    parents: {
        relation: "Mother",
        age : 49,
        occupation : "Doctor"
    }
}

//_____________________________________________________________________________________
//Read key and values
console.log(Object.keys(obj)) //read keys
console.log(Object.values(obj)) //read values


//_____________________________________________________________________________________

//Accessing the properties
//dot notation
console.log(obj.name) //John
console.log(obj.salary) //undefined (because no such pair exists)

//Bracket notation
console.log(obj['age'])  //25
console.log(obj["isStudent"]) //true

//accessing object properties inside object
console.log(obj.parents.relation) //Mother
//adding
obj.parents.name = "Malti"
console.log(obj.parents.name) //Malti

//_____________________________________________________________________________________
//adding properties
obj.course = 'B.Tech' 
obj["country"] = 'India'
console.log("course" ,obj.course,"country", obj.country) //B.Tech India

//updating properties
obj.city = 'Indore'
obj["age"] = 26
// console.log(obj)
console.log(obj.city, obj.age) //Indore 26

//deleting properties
delete obj.course
console.log(obj.course) //undefined (because, this property is deleted)

//________________________________________________________________________________________________

//function inside objects
var calculator ={
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    divide(a,b) {return a/b} //shorthand method
}
console.log(calculator.add(33, 22)) //55
console.log(calculator.subtract(33, 22)) //11
console.log(calculator.multiply(33, 2)) //66
console.log(calculator.divide(10, 5)) //2

//_____________________________________________________________________________________________________
//freeze: does not allow adding or updating properties of array
var obj2 = {
    fname : "Bob",
    age: 21
}
var frozen = Object.freeze(obj2)
frozen.lname = "Sinha"
console.log(frozen.lname)  //lname was not added

frozen.fname = "Alice"
console.log(frozen.fname) // fname not updated

delete frozen.age //age not deleted
console.log(obj2) 
console.log(frozen)

//_____________________________________________________________________________________________________
//seal: does not allow adding properties to an array, updating properties can be done
var obj3 = {
    fname : "Bobby",
    age: 34
}
var sealed = Object.seal(obj3)
sealed.lname = "Deol"
console.log(sealed.lname)  //lname was not added

sealed.fname = "Sunny"
console.log(sealed.fname) // fname updated

delete sealed.age //age not deleted 
console.log(obj3) 