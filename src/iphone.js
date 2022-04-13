//Parallax effect for iphone.html
function parallax() {
    var parallax = document.getElementsByClassName("wrap");
    wrap.style.top = (window.pageYOffset / 4)+'px';
}

window.addEventListener("scroll", parallax, false);