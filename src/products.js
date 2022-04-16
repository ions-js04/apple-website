var body = document.querySelector("body");    
var active_modal; // to refer to the currently openend modal, to close it afterwards (to be accessed by closeModal() function)
                  // the declarations for product, modal cannot be global as need to refresh it with new ID for every prodcut image click

function toggleModal(ID) {
    var imageID = "#" + ID;
    active_modal = imageID;

    var product = document.querySelector(imageID);
    var modal = product.nextElementSibling; // selects next element placed immediately after it
    openModal(modal);
}

function openModal(modal) {
    modal.classList.add("active"); // add/remove class from classList
    body.classList.add("scroll_disabled"); // disables scrolling while modal is opened

    // remove extra padding added to modal (when page is scrolled, static nav not taking space anymore)
    if (window.pageYOffset > 80) { // pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis
        modal.style.padding = "2vw"
    } else {
        modal.style.padding = "6vw 2vw 2vw"  
    }
}

function closeModal() {
    var product = document.querySelector(active_modal);
    var modal = product.nextElementSibling; // selects next element placed immediately after it

    modal.classList.remove("active"); // add/remove class from classList
    body.classList.remove("scroll_disabled"); // disables scrolling while modal is opened
}

function swapProductImage() {

}
