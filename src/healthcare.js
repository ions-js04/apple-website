window.addEventListener("scroll", appearWhenScroll); // add event when scoll
window.addEventListener("scroll", appeartxtWhenScroll); // add event when scoll


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

function appeartxtWhenScroll() {

    const text = document.querySelector(".paragraph"); //point to .paragraph class name
    const position = text.getBoundingClientRect().top; // get the position of the screen
    const screenPosition = window.innerHeight; // get the current position of height

    if (screenPosition > position) { // if current position is more than position of screen

        text.classList.add('text'); // add class name text to .paragraph so the img will appear
    } else {
        text.classList.remove('text'); // else remove the class name text
    }
}