//prepend, before, after, replaceWith : new API's

const main = document.querySelector('main')

const red = document.createElement('div')
const blue = document.createElement('div')
const yellow = document.createElement('div')

//append
main.append( red, blue, yellow) //red --> blue --> yellow

red.style.backgroundColor = 'red' 
blue.style.backgroundColor = 'blue' 
yellow.style.backgroundColor = 'yellow' 

//prepend: sabse pehle add krta h
main.prepend(yellow) //yellow --> red --> blue

//before : works on elements
blue.before(yellow) //blue ke pehle aaye yellow
// red--> yellow --> blue

//after : works on elements
yellow.after(red) //yellow ke baad aaye red
//yellow --> red --> blue

//replacewith : works on element
red.replaceWith(yellow) //yellow --> blue
yellow.replaceWith(blue) //blue 