const button = document.querySelector(".botao-login")

button.addEventListener("click", function(e){
    e.preventDefault()
    console.log(document.querySelector(".email").value)
    console.log(document.querySelector(".password").value)
})

