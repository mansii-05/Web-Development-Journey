/* Each project is separated using comments inside `mini-projects.js`.
Use `Alt + Shift + A` to uncomment `multi-line comments` and vice-versa. */

// Project 1: Simple Calculator

/* var a =Number(prompt("Enter number 1:"));
var operator = prompt("Enter operator (+, -,  *, /");
var b =Number(prompt("Enter number 2:"));
var res;
switch(operator){
    case '+' : {
                    res = a + b ;
                    console.log("The sum is: ")
                    break;
    }
    case '-' : {
                    res = a - b ;
                    console.log("The difference is: ")
                    break;
    }
    case '*' : {
                    res = a * b ;
                    console.log("The product is: ")
                    break;
    }
    case '/' : {
                    res = a / b ;
                    console.log("The result is: ")
                    break;
    }
    default: {
        console.log("Invalid operator/ input");
    }

}
console.log(res); */

//---------------------------------------------------------------------

//Project 2: FizzBuzz

/* Print numbers 1 to 50. But:

- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both, print "FizzBuzz" */

/* for( let i=1; i<=50 ; i++ ){
    if(i%15== 0) console.log(" Fizzbuzz");
     else if (i%3 == 0) console.log("Fizz");
     else if (i%5 == 0) console.log("Buzz");
     else console.log(i);
} */

//---------------------------------------------------------------------

// Project 3: Number Guessing Game

/* var secret = Math.floor(Math.random()*100) + 1;
console.log(secret);
var attempts = 0;
do{
    attempts++;
    var guess = Number(prompt("Guess a number between 1 and 100"));
    if( secret < guess) 
        console.log("Lower..")
    else if( secret > guess) 
        console.log("Higher");
    else
        console.log("YAY!") 
}while(secret!==guess);
console.log(`You got it in ${attempts} attempts.`); */

                            //OR

//guessing the number in 5 or less than 5 attempts

/* var secret1 = Math.floor(Math.random()*100) + 1;
console.log(secret1);
var attempts = 5;
do{
    attempts--;
    var guess = Number(prompt("Guess a number between 1 and 100"));
    if( secret < guess) 
        console.log("Lower..")
    else if( secret > guess) 
        console.log("Higher");
    else{
        console.log("YAY!");
        break;
        }
}while(attempts!==0);
if(attempts===0)
    console.log(`You got it in ${5-attempts} attempts.`);
else
    console.log("Attempts Exhausted!"); */

//---------------------------------------------------------------------

//Project 4: Temperature Converter
    //Take a temperature and a unit (C or F), convert to the other.

/* var temp = Number(prompt("Enter the temperature:"));
var unit = prompt("Is it in degree 'C' or 'F' ? ").toUpperCase();
var res;
switch(unit){
    case 'C' : {
        res = (9/5)* temp - 32;
        console.log("Temperature in degree Fahrenheit is");
        break;
    }
    case 'F' : {
        res = (temp - 32)*(5/9);
        console.log("Temperature in degree Celsius is");
        break;
    }
    default: "Invalid input";
}
console.log(res);
 */
//---------------------------------------------------------------------

// Project 5: Count Vowels in a String

 /* var str= prompt("Enter a string").toLowerCase();
let count = 0;
for(let i =0; i<= str.length; i++){
    let m = str.charAt(i);
    if(m== 'a' || m=='e' || m=='i' || m=='o' || m=='u' ){
        count++;
    }
}
console.log(`The total no. of vowels in the strings is ${count}`);  */

                            //OR

/* var str1= prompt("Enter a string").toLowerCase();
let count = 0;
for(let m of str1){
    if('aeiou'.includes(m)){
        count++;
    }
}
console.log(`The total no. of vowels in the string is ${count}`); */
