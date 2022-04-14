var x = document.getElementById("se-7-table");
var y = document.getElementById("SE-table");
var z = document.getElementById("se-3-table");

function showDivS7() {
    if (x.style.opacity == 0) {
        x.style.opacity = 1;
        x.style.lineHeight = 1.5;
        x.style.height = "50vw";
    } 
    else {
        x.style.lineHeight = 0;
        x.style.height = 0;
        x.style.height = 0;
        x.style.opacity = 0;
    }
  }

  function showDivSE() {
    if (y.style.opacity == 0) {
        y.style.opacity = 1;
        y.style.lineHeight = 1.5;
        y.style.height = "50vw";
    } 
    else {
        y.style.lineHeight = 0;
        y.style.height = 0;
        y.style.height = 0;
        y.style.opacity = 0;
    }
  }

  function showDivS3() {
    if (z.style.opacity == 0) {
        z.style.opacity = 1;
        z.style.lineHeight = 1.5;
        z.style.height = "50vw";
    } 
    else {
        z.style.lineHeight = 0;
        z.style.height = 0;
        z.style.height = 0;    
        z.style.opacity = 0;
    }
  }