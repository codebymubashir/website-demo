
const prompt = require("prompt-sync")();

function loginpage(user,pass){
    let adminusername = "admin123"
    let adminpassword = 223344

    let userusername = "user123"
    let userpassword = 112233

    if((user == adminusername) && (pass == adminpassword)){
        console.log("admin logged in")
    }else if((user == userusername) && (pass == userpassword)){
        console.log("user logged in")
    }else{
        console.log("invalid crediential")
    }
}
let user = prompt("enter your username: ");
let pass = prompt("enter your password: ");
loginpage(user, pass)

