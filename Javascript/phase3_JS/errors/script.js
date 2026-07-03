//----------------------------syntax error------------------------------

/*console.log("Syntax error");
const a = 10;
console.log(a+20);
ver b = 30; //syntax error
console.log(b)
//No line of code will be executed 
//Uncaught SyntaxError: Unexpected identifier 'b' */

// ----------------------reference error-----------------------------

/* console.log("Reference error");
const d = 30;
console.log(d);
console.log(e); // error, loc above it will get executed
// output:
// Reference error
// script.js:15 30
// script.js:16 Uncaught ReferenceError: e is not defined */

// ----------------------type error-----------------------------

/* var g = "hii";
console.log(g)
const f = 45;
f= 609; //error
console.log(f) 
//output:
// hii
// script.js:27 Uncaught TypeError: Assignment to constant variable. */

// ----------------------Range error-----------------------------

/* var brr = 2
console.log(brr)
var arr = new Array(-1); //range error
//output:
// 2
// script.js:37 Uncaught RangeError: Invalid array length */

// ----------------------Internal error-----------------------------

//JS engine is unable to process the code due to some internal error, like too much recursion. One can rarely encounter this error.

