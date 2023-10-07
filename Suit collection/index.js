function showReview(){
    document.querySelector(".review").style.opacity = "100%"
    document.querySelector(".product-img").style.filter = "brightness(0.4)"

}

function hideReview(){
    document.querySelector(".review").style.opacity = "0%"
    document.querySelector(".product-img").style.filter = "brightness(1)"
}





function darkMode(){
    document.getElementById("sun-icon").style.display="none"
    document.getElementById("moon-icon").style.display="block"
    document.getElementsByTagName("body")[0].classList.toggle("body-dark")
    document.querySelector("#intro p").style.color="#EEEFF1"
}

function lightMode(){
    document.getElementById("sun-icon").style.display="block"
    document.getElementById("moon-icon").style.display="none"
    document.getElementsByTagName("body")[0].classList.toggle("body-dark")
    document.querySelector("#intro p").style.color="#EEEFF1"
}

