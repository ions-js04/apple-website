var x = document.getElementById("airpods-table");
var y = document.getElementById("pro-table");
var z = document.getElementById("max-table");

function showDiv3rd() {
    if (x.style.opacity == 0) {
        x.style.opacity = 1;
        x.style.lineHeight = 2.5;
        x.style.height = "50vw";
    } 
    else {
        x.style.lineHeight = 0;
        x.style.height = 0;
        x.style.height = 0;
        x.style.opacity = 0;
    }
}

function showDivPro() {
    if (y.style.opacity == 0) {
        y.style.opacity = 1;
        y.style.lineHeight = 2.5;
        y.style.height = "50vw";
    } 
    else {
        y.style.lineHeight = 0;
        y.style.height = 0;
        y.style.height = 0;
        y.style.opacity = 0;
    }
}

function showDivMax() {
    if (z.style.opacity == 0) {
        z.style.opacity = 1;
        z.style.lineHeight = 2.5;
        z.style.height = "50vw";
    } 
    else {
        z.style.lineHeight = 0;
        z.style.height = 0;
        z.style.height = 0;    
        z.style.opacity = 0;
    }
}

  