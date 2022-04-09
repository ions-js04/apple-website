//set checkpoint for when scroll effect triggers
const checkpoint = 400;
 
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) { //if the amount of their scrolling is less than the target number, .TV will gradually become hidden.
        opacity = 1 - currentScroll / checkpoint;
    } 
    else {
        opacity = 0;
    }
    document.querySelector(".TV").style.opacity = opacity;
});
