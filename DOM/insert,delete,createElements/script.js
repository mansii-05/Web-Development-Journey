//1. creating element ( .createElement() )

const foot = document.createElement('footer') //creates element named footer
const spen = document.createElement('span') //creates element named footer
const body1 = document.body;
const main1 = document.querySelector('main')

//2. inserting
//appendChild --> (old) adds at the end
//append --> (new) adds at the end

body1.appendChild(foot) //ek bar me ek hi element ko add kr skta h
spen.innerHTML ="Hey, <i>I am dynamic...</i>"
main1.append(spen, foot) //append multiple elements ko append kr skta h ek bar me

//3. removing --> .removeChild() : old API
main1.removeChild(foot) //remoced
console.log(main1.contains(foot)) //false

//4. insertbefore()
main1.insertBefore()