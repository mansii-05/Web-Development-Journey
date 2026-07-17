//insertBefore() : old API
const main = document.querySelector('main')
const red = document.querySelector('.box1')
const blue = document.querySelector('.box2')
const yellow = document.querySelector('.box3')

main.insertBefore(yellow, red) //yellow --> red --> blue
main.insertBefore(blue, yellow) //blue --> yellow --> red
