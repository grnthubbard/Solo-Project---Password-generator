const value = document.querySelector("#characterValue")
const input = document.querySelector("#characters")
let password = document.getElementById("password")
const numbers = [0,1,2,3,4,5,6,7,8,9]
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const symbols = ["*", ":", "?", "!", "(", ")", "$", "%", "^", "&", "#", "@", "=", ",", "-", "]", "[", "<", ">", "_", ".", ""]
let bigArray = []
value.textContent = input.value;




input.addEventListener("input", (event) => {
    bigArray = []
    const selectedNumCheck = document.querySelector("input[name='numbers']:checked")
    const selectedSymbolsCheck = document.querySelector("input[name='symbols']:checked")
    bigArray.push(...letters)
    if(selectedNumCheck) {
        bigArray.push(...numbers)
    }
    if(selectedSymbolsCheck) {
        bigArray.push(...symbols)
    }
 
    password.textContent = "";
    value.textContent = event.target.value;
    for(i=0; i<input.value; i++) {
       
        const randomIndex = Math.floor(Math.random()* bigArray.length)
        password.textContent += bigArray[randomIndex]
    }
})

