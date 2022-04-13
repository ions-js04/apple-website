// Set Nav Title based on document title for all pages
var navTitle = document.querySelector("#nav-title");
navTitle.innerHTML = document.title;

// Detect mouse movement to change static nav colour
document.addEventListener('mousemove', getCoords);
function getCoords(event) {
    var x = event.screenX; // get mouse x-coordinate
    var navbar = document.querySelector("#static-nav");

    if (x > 100) {
        x /= 10;
    }

    navbar.style.background = "radial-gradient(circle at center, #f0fdf7, #599988" + x + "%, #f0fdf7)";
}
  
