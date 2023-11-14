const clockTime = document.querySelector('#clock-container h2')
const clockDate = document.querySelector('#clock-container h3')


setInterval(function(){
    const date = new Date();
    clockTime.innerHTML = `<h2>${date.toLocaleTimeString()}</h2>`
    clockDate.innerHTML = `<h3>${date.toLocaleDateString()}</h3>`

},1000)
