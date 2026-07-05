//---------------strict mode----------------------------------------

//window object in normal mode --> undefined
//refers to object itself --> same
//if variable/function is not declared, reference error (not defined)

"use strict"; //written at top to enable it

console.log(this); //undefined
//console.log(this) is at the top/global level (not inside a function), in a normal browser script this is still the global window object.

// c = 10; //c is not defined (unlike without strict mode) if we directly assign a value in strict mode

a = 20; //ignored, no error is thrown
var a = 30; //ignored
var a = 40;
console.log(a); //40

//------------------------------------'this' in regular functions---------------------------------------

function show() {
  console.log(this); // undefined
}
show();

//------------------------------ this in method ------------------------------------------------

var obj = {
  fname: "Rohan",
  lname: "Raj",
  age: 21,
  sayHi: function () {
    console.log(this); //object itself
  },
  updateAge: function () {
    this.age = "23";
    console.log(this.age);
  },
};
console.log(obj.sayHi()); //undefined (doesn't returns anything)
obj.sayHi(); //object itself
obj.updateAge(); //23

//------------------------------method scope of regular function-------------------------------------
//method: func inside func

var obj2 = {
  fname: "Alice",
  lname: "Saini",
  greet: function () {
    var sayHi = function () {
      console.log("hii", this); //undefined
    };
    // sayBye = function (){ //inside strict mode, we get sayBye() is not defined
    //     console.log("bye", this.fname)
    // }
    sayHi();
    //sayBye();
  },
};
obj2.greet(); //undefined

//------------------------------this in FAT Arrow function---------------------------------------------
//has no lexical context of its own, refers to global context, thus, 'this' in fat arrow function refers to window object

var obj3 = {
  fname: "Sam",
  lname: "Saha",

  greet: function () {
    var sayHi = () => {
      console.log("hii", this.fname); //object itself
    };
    sayHi();
  },

  arrowNormal: () => {
    console.log(this);
  },

  fatArr: () => {
    var fat = () => {
      console.log(this); //undefined
    };
    fat();
  },
};
obj3.greet(); //hii Sam
obj3.arrowNormal(); //window object
obj3.fatArr(); //window object

//-------------------------------this in method inside nested object --------------------------------

var obj4 = {
  fname: "Harsh",
  age: 32,
  salary: "1,00,000",
  company: {
    fname: "Google",
    year: 2023,
    getName: function () {
      console.log(this.fname); //Google
      console.log(this.salary); //undefined
    },
  },
};
obj4.company.getName();

var obj5 = {
  fname: "Harsh",
  age: 32,
  salary: "1,00,000",
  company: function() {
    const info = {
        fname: "Google",
        year : 2023,
        getinfo : () => {
            console.log(this.fname) //Harsh
            console.log(this.salary) //1,00,000
        }
    }
        info.getinfo(); 
    }
}

obj5.company();
