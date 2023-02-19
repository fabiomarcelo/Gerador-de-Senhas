
let sliderElement = document.querySelector("#slider");
let bottonElement = document.querySelector("#button");

let sizePassoword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890!@#$&%";
let novaSenha = "";

sizePassoword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassoword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass; 
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
