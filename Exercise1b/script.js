let number1 = 103
let number2 = 392

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("calc1").innerText = number1 + number2
    document.getElementById("calc2").innerText = Math.round(number1 / number2 * 100) +  "%"        
})