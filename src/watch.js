const checkpoint = 100; //set checkpoint for when scroll effect starts
const endpoint = 500; //set checkpoint for when scroll effect ends


window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    opacity = 1;

    //scroll fade out effect
    if (currentScroll < checkpoint) {
        opacity = 1;
    }
    else if (currentScroll >= checkpoint) {
        opacity = 1 - currentScroll / endpoint;
    }
    else {
        opacity = 0;
    }
    document.querySelector(".Watch").style.opacity = opacity;
});
