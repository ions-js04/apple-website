window.addEventListener("scroll", appearWhenScroll); // add event when scoll


function appearWhenScroll() {

    const image = document.querySelector(".picture-mac"); //point to .picture-mac class name
    const position = image.getBoundingClientRect().top; // get the position of the screen
    const screenPosition = window.innerHeight; // get the current position of height

    if (screenPosition > position) { // if current position is more than position of screen

        image.classList.add('photo'); // add class name photo to .picture-mac so the img will appear
    } else {
        image.classList.remove('photo'); // else remove the class name photo
    }
}