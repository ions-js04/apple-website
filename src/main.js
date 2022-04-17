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

//slideshow for featured box
let slideIndex = 1;
showSlides(slideIndex); //start from slide one

function plusSlides(n) {
  showSlides(slideIndex += n);   //next slide
}

function currentSlide(n) {
  showSlides(slideIndex = n);      //let the number of slide matches the actual number slide
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
      slideIndex = 1
    }    
  if (n < 1) {
      slideIndex = slides.length  // when user press previous slide in first slide it will proceed to last slide
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";        //looping:change the slide number and picture after click the next or previous button
  }
  slides[slideIndex-1].style.display = "block";  
}

