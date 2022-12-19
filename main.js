
const botao = document.querySelector("[data-button]")

const alerta = document.querySelector("[data-alert]")

var email = document.getElementById("input-email");

var regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/




botao.addEventListener("click", () => {
    validateEmail2()
})


function validateEmail2 () {
    if((email.value).match(regx)) {
        alerta.style.display = "none";
        email.style.border = "1px solid var(--Pale-Blue)"
        email.value = ""
        return true
    } else {
        alerta.style.display = "block";
        email.style.border = "1px solid red"
        return false
    }
}





/*botao.addEventListener("click", () => {
    if (validateEmail2) {
        alert("Thanks! You'll be notified!")
    } else {
        alerta.style.display = "block";
        email.style.border = "1px solid red"
    }
})


function validateEmail2 () {
    if((email.value).match(regx)) {
        return true
    } else {
        return false
    }
}




/*      


botao.addEventListener("click", () => {
    validateEmail2();
})


/*
function validateEmail() {
  
    if(regx.text(email.value)) {
        alert("Thanks! You'll be notified!")
        return true
    } else {
        alert.style.display = "block";
        email.style.border = "1px solid red"
    }
}

botao.addEventListener("click", () => {
    validateEmail();
})
*/