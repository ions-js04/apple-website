// Set Nav Title based on document title for all pages
var navTitle = document.querySelector("#nav-title");
navTitle.innerHTML = document.title;

// Detect mouse movement to change static nav colour
document.addEventListener('mousemove', gradientChange);

var colors = ["#88cfbc88", "#daff05", "#e69696ab", "#6579b996", "#f495ff96", "#fcbebede"];
var randomColorIndex = Math.floor(Math.random() * colors.length); // Math.floor() rounds down numbers, Math.random() generates number 0 <= x < 1  

function gradientChange(event) {
    var navbar = document.querySelector("#static-nav");
    var x = event.screenX; // get mouse x-coordinate
    if (x > 100) {
        x /= 10;
        x-= 10; // gradient value optimization
    }

    navbar.style.background = "radial-gradient(circle at " + x + "% 100%, #f0fdf7, " + colors[randomColorIndex] + ")";
}

