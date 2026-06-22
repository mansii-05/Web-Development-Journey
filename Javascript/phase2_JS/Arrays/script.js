//1. Creating an array
console.log("empty array")
var empty=[]  //empty array
console.log(empty) 

var numbers=[1,2,3,4,50] //datatype: number
console.log("number array", numbers)

var string= ['Alice',"Bob", "Don"] //datatype: string
console.log(string)

var arr= [12,,23,true,'hi',"Ramesh"] //different datatype
console.log(arr) //printing the array


//2. accessing the elements of the array
console.log(arr[1]) // accessing a specific element of an array
console.log(arr[10]) //10th element not present, gives 'undefined'.
console.log(arr[-2]) //negative index gives undefined.

console.log(arr.length) //get length of array
arr.length= 3 //truncate array length
console.log(arr) //[12,undefined,23]


//3. Mutating methods in array
console.log("Mutating methods in array")

//push()
console.log("push()")
arr1=[11,22,33,44,55]
arr1.push(66)
console.log(arr1) // (6) [11, 22, 33, 44, 55, 66]

//pop()
console.log("pop()")
arr1.pop() 
console.log(arr1) //(5) [11, 22, 33, 44, 55]

//unshift()
console.log("unshift()")
arr1.unshift(10) //adds at beginning (unshift)
console.log(arr1) //(6) [10, 11, 22, 33, 44, 55]
arr1.unshift(7,8,9) 
console.log(arr1) //(9) [7, 8, 9, 10, 11, 22, 33, 44, 55, 66]
// arr1.unshift(7,,8,9) : gives an error

//shift()
console.log("shift()")
arr1.shift() //delete 1st element (shift)
console.log(arr1) // (8) [8, 9, 10, 11, 22, 33, 44, 55]

//sort()
arr2 =[ 2, 0, 34, 1, 27]
console.log("sort()")
arr2.sort() //arrange in ascending order
console.log(arr2) //[0, 1, 2, 27, 34]
arr2.sort((a,b)=> b-a) //arrange in descending order
console.log(arr2) //[34, 27, 2, 1, 0]

//Issue with sort: It treats numbers as strings which sometimes leads to wrong output. for e.g
console.log("issue with sort")
var sort_arr =[2, 100, 99] 
console.log(sort_arr.sort()) //[100, 2, 99] --> wrong. To avoid this, use the logic :sort_arr.sort((a,b)=>a-b) 
console.log(sort_arr.sort((a,b)=> a-b)) //[2,99,100] : correct answer

//reverse()
console.log("reverse()")
arr2.reverse()
console.log(arr2) //[0, 1, 2, 27, 34]

//To add: splice(startIndex, count, ...items)
console.log("splice()")
var test =[11, 23]
test.splice(2,0,3,4,5,6) // adds 3,4,5,6 from 2nd index
console.log(test) //[11, 23, 3, 4, 5, 6]
test.splice(1, 3, 99, 88)  //deletes 3 element from index 1 and adds 99,88
console.log(test) //[11, 99, 88, 5, 6]

//to delete: splice(startIndex, deleteCount)
test.splice(4, 2) //deletes 5th element only as there is no 6th element 
console.log(test) //[11, 99, 88, 5]


//4. non-mutating methods of an array
console.log("Non-mutating methods")
//slice(start,end)
var alpha = ['A', 'B', 'C', 'D']
var a= alpha.slice(1,2) //store it in another variable or print it 
console.log(alpha) //unchanged
console.log(a) //['B'] : new array
console.log(alpha.slice(4,8)) // out of range index gives [], empty array

//concat()
var a1= [1,2]
var a2= ["Hii"]
console.log(a1.concat(a2)) //a1 + a2 --> [1, 2, "Hii"]
console.log(a2.concat(a1)) //a2 + a1 --> ["Hii", 1, 2]
console.log(a1.concat([3, 4])) //a2 + a1 --> [1, 2, 3, 4] ([] inside concat is not necessary)
console.log(["bye ","hello "].concat(a2)) //[bye hello hii]

//includes()
var inc = ['b', true, 2, false]
console.log(inc.includes(false)) //true
console.log(inc.includes('ba')) //false

//indexOf()
console.log(inc.indexOf(true)) //1
console.log(inc.indexOf(4)) //-1 (because, -1 is not present)

//join()
console.log(inc.join()) //b,true,2,false
console.log(inc.join("-")) //b-true-2-false
console.log(inc.join("_0_")) //b_0_true_0_2_0_false


//5. Iterate over an array
console.log("iterate over an array")
var fruits = ['mango', 'banana', 'kiwi', 'pear' ]
// for..of loop: gives elements
for(a of fruits){
    console.log(a)
    console.log(fruits[a])

}
//for..in loop: gives index of elements
for(a in fruits){
    console.log(a)
}

//forEach: just run a function on each array element, doesnot return anything.
console.log("forEach")

var year = [2000, 2025, 2050, 1600]
year.forEach(function(){
    console.log("Array of year")
})

//function inside forEach takes two parameters, elements present and index value
year.forEach(function(element, index){
    console.log(element)  // prints elements
    console.log(index)    //prints index of elements
})

year.forEach(function leap(e){
    if(e%400===0 || e%4===0 && e%100!==0){
        console.log(e, "is a Leap year")
    }
    else
        console.log(e, "is not a leap year")
})
// leap(2034) not accessible, gives not defined error
//to access it, we can make a function separately then pass it as an arg to forEach
function leap(e){
    if(e%400===0 || e%4===0 && e%100!==0){
        console.log(e, "is a Leap year")
    }
    else
        console.log(e, "is not a leap year")
}
console.log("\n")
leap(2034) //accessible now as function leap is explicitly defined
console.log("\n")
year.forEach(leap)


//MAP : returns a new array of same length
var map_arr = [10, 20, 3, 0]
console.log("Map without return statement")
var res = map_arr.map(function(element,index, array){
    console.log(element) // without return statement, it will return an array with value: undefined 
})
console.log(res)

//with return statement
console.log("Map with return statement")
var res1 = map_arr.map(e => {return e**2;}) //returns square of elements
console.log(res1)

//FILTER: returns a new array, not necessarily of same length. 
console.log("Filter")
var fil_arr =[11, 22, 33, 44, 55, 66]
var res2 = fil_arr.filter(function(e){
    if(e%2==0){
        return e; //if return statement not mentioned, returns empty array '[]'
    }
})
console.log(res2) 

//REDUCE
//without return statement, the default value stored in acc is undefined.
console.log("reduce() without return statement")
var sample = [10, 20, 30, 40, 50]
sample.reduce(function(acc, val){
    console.log(acc) //acc ki initial value = 10, iteration starts from second
    console.log(val)
})
//output: 
// 10
// 20
// undefined
// 30
// undefined
// 40
// undefined
// 50
console.log("reduce() with return statement")
//in each iteration, accumulator stores the sum of previous acc and value
var sample = [10, 20, 30, 40, 50]
var sum = sample.reduce(function(acc, val){
    console.log("accumulator ",acc) //acc ki initial value = 10, iteration starts from second
    console.log(val)
    return acc+ val;
    console.log("after return") // won't get executed 
},0) //initial value of acc= 0
console.log("Sum is: ", sum)
//output: 
// accumulator  30
// 20
// accumulator  30
// 30
// accumulator  60
// 40
// accumulator  100
// 50
// Sum is: 150





