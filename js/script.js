let navbar = document.querySelector("#navbar")
let to_back = document.querySelector(".to_back")

window.addEventListener("scroll", function(){
let scroll_value = window.scrollY;

if (scroll_value > 150) {
    navbar.classList.add("sticky")
    to_back.classList.add("show")
    
}

else{
    navbar.classList.remove("sticky")
    to_back.classList.remove("show")
}


})