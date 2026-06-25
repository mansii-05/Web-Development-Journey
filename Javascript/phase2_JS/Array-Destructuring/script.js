//Array Destructuring
var arr = [10, 20, 30, 40]
console.log("array is", arr)

//old way
var a1 = arr[0]
var a2 = arr[1]
var a3 = arr[2]
var a4 = arr[3]
console.log(a1, a2, a3, a4) // 10 20 30 40

//new way
var [a, b, c, d] = arr
console.log(a, b, c, d) //10 20 30 40 

//skip elements
var [x , ,y ,z] = arr //skips 2nd element
console.log(x, y, z) //10 30 40

//give default values
let [m = 10, n = 20] = [5, 15] 
console.log(m, n) //5 15

//swap variables (easy and elegant!)
let first = 20;
let second = 30;
console.log(`Before swap, first: ${first} and second: ${second}`);
[first, second] = [second, first];
console.log(`After swap, first: ${first} and second: ${second}`); 

//_______________________________________________________________________________________________

//Spread: expand an array
let arr2 =[...arr, 50, 60] //create a new array with more elements in previous array
let copy = [...arr] //copy an array (shallow)
console.log(arr2) // (6) [10, 20, 30, 40, 50, 60]
console.log(copy) // (4) [10, 20, 30, 40]

//combine arrays using spread
var brr1 = [11, 22];
var brr2 = [33, 44];
let combine = [...brr1, ...brr2]
console.log(combine) // (4) [11, 22, 33, 44]

let combined = [...[1, 2, 3, 4], ...[0, 9, 8]]
console.log(combined) //(7) [1, 2, 3, 4, 0, 9, 8]

//Pass as function arguments
console.log(Math.max([1,2,3,4])) //NaN (without spread operator)
console.log(Math.max(...[1,2,3,4])) //4
console.log(Math.max(...arr)) //40

//_______________________________________________________________________________________________

//REST : collect into an array
var crr = [21, 32, 43, 54, 65]
var [x1, x2, ...x3] = crr;
console.log(x1, x2, x3) //x1: 21, x2: 32, rest elements or array are stored in x3: [43, 54, 65]  

//________________________________________________________________________________________________
//Multi-dimensional arrays
let twoD = [ //indexing starts from 0
    [1, 2, 3],
    [4, 5, 6]
]
console.log(twoD)
console.log(twoD[1][2]) //6

//accessing elements of multi-dimensional array
for (let row of twoD){
    for(let value of row){
        console.log(value)
    }
}