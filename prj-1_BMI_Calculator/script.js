const form = document.querySelector('form')
const button = document.querySelector('button')
const results = document.querySelector('#result');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`;
    }
    if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is <span> ${bmi} </span>`;
    }
   
})