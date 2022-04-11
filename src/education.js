window.addEventListener("scroll", appearWhenScroll);

function appearWhenScroll() {

    const image = document.querySelector(".picture-mac");
    const position = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (screenPosition > position) {
        image.classList.add('photo');
    } else {
        image.classList.remove('photo');
    }
}