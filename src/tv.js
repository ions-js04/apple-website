const checkpointInfo = 300; //set checkpoint for when scroll effect starts
const endpointInfo = 1550; //set checkpoint for when scroll effect ends

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    opacityInfo = 0;

    //scroll fade in effect for .Info
    if (currentScroll < checkpointInfo) {
        opacityInfo = currentScroll / checkpointInfo;
    }
    else if (currentScroll >= checkpointInfo && currentScroll < endpointInfo) {
        opacityInfo = 1;
    }
    document.querySelector(".info_wrap").style.opacity = opacityInfo;
});
