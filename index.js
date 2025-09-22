const value = document.querySelector("#characterValue")
const input = document.querySelector("#characters")
let password = document.getElementById("password")
let numbers = [0,1,2,3,4,5,6,7,8,9]
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    for(i=0; i<input.value; i++) {
        password.textContent = Math.floor(Math.random()*9)
    }
    
})

