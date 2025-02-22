const greeting = document.getElementById("greeting")
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"
const username = window.prompt("Who am I meeting?", "")
greeting.innerHTML = "Welcome to my website, " + username + "!" 