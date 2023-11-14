var hr = 0
var min = 0
var sec = 0

var day = new Date()
var hrhand = document.querySelector("#hour-hand")
var minhand = document.querySelector("#min-hand")
var sechand = document.querySelector("#sec-hand")
 
setInterval(
    function(){
        day = new Date()
        sec = day.getSeconds()*6
        hr = day.getHours()*30 + Math.round(min/12)
        min = day.getMinutes()*6
        hrhand.style.transform = `rotate(${hr}deg)`
        minhand.style.transform = `rotate(${min}deg)`
        sechand.style.transform = `rotate(${sec}deg)`
    },1000
)