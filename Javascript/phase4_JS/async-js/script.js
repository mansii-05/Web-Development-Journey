//==============================setTimeout===========================================

console.log("Start")

//to delay a code --> Use setTimeout
setTimeout(function a(){  //a is handled through web api(event loop) instead of call stack
    console.log("Timeout")
}, 3000)

console.log("End")
//output
//Start
//End
//Timeout (3 seconds baad dikhega)

setTimeout(function(){
    console.log(1)
},6000)

setTimeout(function(){
    console.log(2)
},5000)

setTimeout(function(){
    console.log(3)
},8000)

//output
//2 (5 seconds baad dikhega)
//1 (6 seconds baad dikhega)
//3 (8 seconds baad dikhega)

