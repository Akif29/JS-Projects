let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*123456789";
const my_popup =  document.getElementById("my-popup")
passwordEl = document.getElementById("password")


random_password(9)


function random_password(string_length) {
    let random_string = "";
    for (let i = 0; i < string_length; i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
        passwordEl.value = random_string
    }
}

function genPassword() {
    random_password(11)
}


let copypassEl = document.querySelector(".copyPass")
copypassEl.addEventListener("click", function() {
    let input = passwordEl
    input.select()
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    setTimeout(showPopUp,1)
    setTimeout(ClosePopUp,2000)
})


function showPopUp(){
    my_popup.style.display="block"
}

function ClosePopUp(){
    my_popup.style.display="none"
}
