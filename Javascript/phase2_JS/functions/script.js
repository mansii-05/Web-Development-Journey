// calling a function
 function test(){
    console.log("This is a test function");}
    test();

// return statement
function test1(){
    //no return statement here- it will return undefined by default
}
console.log(test1());
function test2(){
    // multiple return statements
    return "First return statement";
    return "Second return statement"; //this'll never execute
}
console.log(test2()); // this will print "First return statement"

//IIFE 
/* function a(){
    console.log("I am a function");
}(); */ 
// this will give an error because we cannot call a function immediately after its declaration without using parentheses

// To fix this error, we can wrap the function declaration in parentheses to create an IIFE (Immediately Invoked Function Expression)
(function a(){
    console.log("I am an IIFE");
})(); // this will work fine
//                              a() //error because a is not defined in the global scope, accessible only inside IIFE

//shorthand rules
console.log("Shorthand rules in arrow functions");

// const add = (a,b)=>return a+b; 
//This is wrong because we cannot use return explicitly in arrow function without curly braces

//1.implicit return
const add = (a,b) =>a+b;  //here the function will return the value of a+b without using return keyword explicitly
add(2,3)  // it will return 5, but we are not storing it in any variable or printing it, so we will not see the output
console.log(add); // this will print the function definition, not the output of the function
console.log(add(2,3)); //it will print 5

//2. single parameter
const square= x => x*x;
console.log(square(5));

//3.No parameters
const greet = () => console.log("Hello World");
greet(); // this will call the greet function and print "Hello World" to the console

//4. multiple statements
const mul = (a,b) => {
    const result = a*b;
    return result;
}
console.log(mul(4,5));

// Parameters 
//1. Default parameters
console.log("Default parameters");
const greetEveryone = name => console.log(`Welcome, ${name}`);
greetEveryone("Alice");
greetEveryone(); // gives undefined, bcoz no default parameter was provided

const greetEveryone_Default = (name="Guest") => console.log(`Welcome, ${name}`);
greetEveryone_Default();

//2. Rest parameters : sometimes we don't know how many parameters will be passed to the function, in such cases we use '...' to collect them all in an array
console.log("Rest parameters");
const sum = (...numbers) => {
    console.log(numbers); // this will print the array of numbers passed to the function
    let total = 0;
    for(let num of numbers){ //to read elements of array we can use for...of loop
        total+=num;
    }
    return total;
}
console.log(sum(1,2,3,4,5)); // this will return 15
console.log(sum(10,20)); // this will return 30

//3. What if you pass too many or too few parameters
console.log("Too many or too few parameters");
const display = (name, age) => console.log(`Name: ${name}, Age: ${age}`);
display("John", 30); // this will work fine
display("Banega"); // this will give undefined for age
display("Don", 25, "Extra parameter"); // this will ignore the extra parameter and work fine

//callback functions
console.log("Callback functions");
function animal(name, callback){
    callback(name);
}

function displayAnimal(name1){
    console.log(`Animal: ${name1}`);
}
animal("Lion", displayAnimal); 

//pure function : yields same output for GIVEN INPUT 
function pure(a){
    console.log(a);
}
pure(20); //Output:20
pure(20); //Output:20
//Impure function : yields different output for GIVEN INPUT e.g.
let count =0;
function counter(){
    count+=1;
    console.log(count);
}
counter(); //Output: 1
counter(); //Output: 2
counter(); //Output: 3


