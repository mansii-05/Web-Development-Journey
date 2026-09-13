// /* 
// //---------------example just to understand promise in simple words----------------------

// /* function datado(){
//     let response = fetch("https.www.google")
//     console.log(response)
// }
// datado() //this will give me a pending promise */

// //________________________________________________________________________________________________

// //======Making promise in JS (Generally, we have to handle promises in JS instead of making it.)=======

// let p2 = new Promise(function(resolve, reject){
//     console.log("Promise pending hai....")
//     let val = true;
    
//     if(!val){
//         console.log("Fulfilled")
//         resolve() //resolve and reject are functions..
//     }
//     else{
//         console.log("Failure")
//         // reject()
//     }
    
// })
// console.log(p2)
// console.log("\n")
// //output
// /* 
// Promise pending hai....
// Failure
// script.js:28 Promise {<rejected>: undefined}
// script.js:24 Uncaught (in promise) undefined //(we get this error, because we have not dpone anything if the promise gets rejected)
// (anonymous) @ script.js:24
// (anonymous) @ script.js:14 */

// //________________________________________________________________________________________________

// let p1 = new Promise(function(resolve, reject){
//     console.log("Promise pending hai....")
//     let val = true;
    
//     setTimeout(function(){
//         if(!val){
//             console.log("Success, val is true")
//             resolve() //resolve and reject are functions..
//         }
//         else{
//             console.log("Failure, val is false")
//             reject()
//         }
        
//     },2000)
    
// })
// console.log(p1)

// p1.then(function(){ //use .then for promise resolved
//     console.log("Promise is fulfilled")
// })

// .catch(function(){ //use .catch for promise was rejected
//     console.log("Promise rejected")
// })
// .finally(function(){
//     console.log("Tata, byee byeee....")
// })
// console.log("\n")
// //Output (1): If resolved
// // Promise pending hai....
// // Promise {<pending>}
// //(After 2 seconds)
// // Success, val is true
// // Promise is fulfilled
// // Tata, byee byeee....

// //Output (2): If rejected
// // Promise pending hai....
// // Promise {<pending>}
// //(After 2 seconds)
// // Failure, val is false
// // Promise rejected
// // Tata, byee byeee....

// //-----------------------------ORDER FOOD------------------------------------------------------------

// //order krungi --> confirm hoga --> paisa doo --> ordeer doneee
// //agar reject huaa --->  bhukhe rahoo

// function orderFood(){
//     let myOrder = new Promise(function(resolve, reject){
        
//         console.log("Maine order kar diyaaa.......")
//         let orderStatus = true;
        
//         setTimeout(function(){
//             if(orderStatus){
//                 console.log("Order confirmed, out for delievery")
//                 resolve()
//             }
//             else{
//                 console.log("Sorry, order wasn't confirmed..")
//                 reject()
//             }
//         }, 3000)
        
//     })
    
//     .then(function(){
//         console.log("Make payment and enjoy your food")
//     })
    
//     .catch(function(){
//         console.log("Complain/feedback..")
//     })
// }

// orderFood()
// // output (1): If resolved
// // Maine order kar diyaaa.......
// // (After 3 seconds)
// // Order confirmed, out for delievery
// // Make payment and enjoy your food

// //output (2): If rejected
// // Maine order kar diyaaa.......
// // (After 3 seconds)
// // Sorry, order wasn't confirmed..
// // Complain/feedback..

// //use feetch

// let response = fetch('https://fakestoreapi.com/products/')
// // let response = fetch('https://fakestoreapi.com/products/2') //prints data with id:2

//     response.then(function(data){
//         console.log("yipeeee")
//         console.log(data.json())
//     })
//     .then(function(){
//         console.log("lalala")
//     })
// .catch(function(){
//         console.log("My bad..")
//     })

//=================async await===========================================

//async function returns promise

// async function data(){
//     console.log("async")
// }
// console.log(data())
// //output
// // async
// // Promise {<fulfilled>: undefined}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined

//--------------------------------------------------------------------------------------------------------
  
async function dataLao(){
    
    // let resp = fetch('https://fakestoreapi.com/products/') //pending state me chala jayega without await

    try{
        let resp = await fetch('https://cakestoreapi.com/products/') //jab tak data fetch nhi kregaa, aage nhi badhegaa
    
        let datas = await resp.json()
        datas.forEach(element => { console.log(element.id)    
        });
        console.log(resp)
    }

    catch(error){
        console.error(error)
    }

}
dataLao() 