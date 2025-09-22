const value = document.querySelector("#characterValue")
const input = document.querySelector("#characters")
let password = document.getElementById("password")
const numbers = [0,1,2,3,4,5,6,7,8,9]
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
let bigArray = []
value.textContent = input.value;




input.addEventListener("input", (event) => {
    bigArray = []
    const selectedNumCheck = document.querySelector("input[name='numbers']:checked")
    if(selectedNumCheck) {
        bigArray.push(...numbers)
        bigArray.push(...letters)
    }
    else {
        bigArray.push(...letters)
    }
    password.textContent = "";
    value.textContent = event.target.value;
    for(i=0; i<input.value; i++) {
       
        const randomIndex = Math.floor(Math.random()* bigArray.length)
        password.textContent += bigArray[randomIndex]
    }
    
})

