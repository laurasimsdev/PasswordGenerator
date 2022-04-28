const characters = String.fromCharCode(...Array(123).keys()).slice(33);
charArray = characters.split("");
charArray.splice(59,1);
charArray.splice(1,1);

let passwordEl1 = document.querySelector("#password-el-1");
let passwordEl2 = document.querySelector("#password-el-2");
let passwordEl3 = document.querySelector("#password-el-3");
let passwordEl4 = document.querySelector("#password-el-4");  

function randomCharacter(){
    let x = (Math.floor(Math.random()*88));
    return charArray[x];
}

function randomPassword(){
    let password ="";
    for(let i=1; i<=15; i++){
        password += randomCharacter();
    }
    return password;
}

function generate(){
    passwordEl1.textContent=randomPassword();
    passwordEl2.textContent=randomPassword();
    passwordEl3.textContent=randomPassword();
    passwordEl4.textContent=randomPassword();
}

