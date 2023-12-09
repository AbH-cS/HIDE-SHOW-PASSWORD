let btn = document.getElementById("btn")
let image = document.createElement("img")
image.src = "eye-icons/eye-close.png"
image.classList.add("image1")
btn.appendChild(image)

let password = document.getElementById("password")

function click1(){
    if(password.type == "password"){
        password.type = "text";
        image.src = "eye-icons/eye-open.png"
    }
    else{
        password.type = "password";
        image.src = "eye-icons/eye-close.png"
    }
}