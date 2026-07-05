console.log(this); //refers to window object in global scope

b = 10; //directly making global variable

a = 20; //ignored
var a = 30;
console.log(a) //30

//-------------------------'this' in regular functions-----------------------------------------

function show(){
    console.log(this); // window object, coz this is referring towards global object
}
show();

//------------------------------ this in method ------------------------------------------------

var obj2 = {
    fname: "Abhishek ",
    lname: "Sharma",
    age : 20,
    getIntro: function(){
        console.log(this.fname + this.lname); //refer to object itself
    } ,
    updateAge: function (){
        console.log(this.age = 25);//update age
    }
}
obj2.getIntro() // refers to object, returns fname and lname of obj2
obj2.updateAge() //30 --> (25)

//------------------------------method scope of regular function-------------------------------------

var obj = {
    fname: "John",
    lname: "Doe",
    age : 30,

    getIntro: function(){ //method
        console.log(this); //refer to object itself
    },

    sayHi : function (){  
        //function inside method
        var sayBye = function () {
                console.log(this); //window object
        }
        sayTata = function () {
                console.log(this); //window object (plain function call)
        }
        sayBye()
        sayTata()
    }
}

obj.getIntro() // refers to object
console.log("method scope of regular function")
obj.sayHi(); //window object


//------------------------------this in FAT Arrow function---------------------------------------------

//it has no lexical context of its own, so it refers to window object in global scope, and to the object in method scope
console.log("\n")
console.log("fat arrow function")
var obj3 = {
    fname: "Sara ",
    lname: "Tendulkar",
    age : 21,

    getIntro: function(){
        // console.log(this); //refers to window object
        sayName=  () => {  //inside normal func, refers to the lexical context of the function inside which it is defined.
        console.log(this.fname + this.lname); //refer to object itself
        }
        sayName()
    },

    fatArrow: () => {  //fat arrow
        console.log(this) //window object
    },

    sayHi : () => {
        sayBye = () => {
                console.log(this); //window object
        }
        sayBye()
    }

}

obj3.fatArrow(); //window object

obj3.sayHi() //window object

console.log("method scope of arrow func")
obj3.getIntro()

//-------------------------------this in method inside nested object --------------------------------

var obj4 = {
  fname: "Samaira ",
  age: 20,
  company: {
    fname: "Google",
    getName: function () {
      console.log(this.fname); //google
    },
  },
};
obj4.company.getName(); //google


var obj5 = {
  fname: "Samaira ",
  age: 30,
  getCompany: function () {
    const company = {
      fname: "Google",
      getname:  () => {
        console.log(this.fname); //Samaira
      },
    };
    company.getname(); //samaira
  },
};
obj5.getCompany(); //samaira
