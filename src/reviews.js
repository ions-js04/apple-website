// Reviews Page Filter Elements Shown
var all_labels = ["macbook","iphone","ipad","watch","airpods","tv"];

function filter(btnName) {
    var selected_label = btnName;

    // reset filter (retrieve back all label reviews)
    reset_filter();

    // get the elements (review box) to hide
    for (var label of all_labels) { // loops through whole array (all_labels)
        if (label != selected_label) {
            // hide other labels reviews
            elementsToHide = document.getElementsByClassName(label); // getElementsByClassName selects ALL elements (NOTE: returns in NodeList) with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
            for (var i=0; i < elementsToHide.length; i++) { // need to use for loop to access each element with matched class (as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
                elementsToHide[i].classList.add("hidden"); // hiding elements 
            }      
        }
    }    
}

function reset_filter() {
    for (var label of all_labels) { // loops through whole array (all_labels)
        elementsToRetrieve = document.getElementsByClassName(label); // getElementsByClassName selects ALL elements (NOTE: returns in NodeList) with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
        for (var i=0; i < elementsToRetrieve.length; i++) { // need to use for loop to access each element with matched class (as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
            elementsToRetrieve[i].classList.remove("hidden"); // rettrieving elements 
        }
    }    
}