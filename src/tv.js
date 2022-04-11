

const checkpointTV = 100; //set checkpoint for when scroll effect starts
const endpointTV = 500; //set checkpoint for when scroll effect ends

const checkpointInfo = 550;
const endpointInfo = 750;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    opacityTV = 1;
    opacityInfo = 0;

    //scroll fade out effect for .TV
    if (currentScroll < checkpointTV) {
        opacityTV = 1;
    }
    else if (currentScroll >= checkpointTV) { //if the amount of their scrolling is less than the target number, .TV will gradually become hidden.
        opacityTV = 1 - currentScroll / endpointTV;
    }
    else {
        opacityTV = 0;
    }

    //scroll fade in effect for .Info
    if (currentScroll < checkpointInfo) {
        opacityInfo = currentScroll / checkpointInfo;
    }
    else if (currentScroll >= checkpointInfo && currentScroll < endpointInfo) {
        opacityInfo = 1;
    }
    document.querySelector(".info_wrap").style.opacity = opacityInfo;
    document.querySelector(".TV").style.opacity = opacityTV;
});
