
//Set automation for image carousel
var pointer = 1;
setInterval(function(){
    document.getElementById('btn' + pointer).checked = true;
    pointer ++;
    //if on the 4th img, go back to the 1st
    if (pointer > 4){
        pointer = 1;
    }
}, 4500)