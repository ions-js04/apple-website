// Set Nav Title based on document title
var navTitle = document.querySelector("#nav-title");
navTitle.innerHTML = document.title;

// Contact us page FAQs dropdown
function dropdown(ID) {
    var questionContainer = document.querySelector("#" + ID); // '#ID' (e.g ID = 'question-1', it would then be '#question-1')
    var question = questionContainer.querySelector(".question");
    var dropdownText = questionContainer.querySelector(".dropdown-text"); // searches for specified class under its parent only (limited scope)
    var dropdownArrow = questionContainer.querySelector(".dropdown-arrow");

    if (dropdownText.classList.contains("hidden")) { // checks if element contains class 'hidden'
        questionContainer.classList.add("expanded"); // change bg color of dropdown box
        question.classList.add("bold"); // make question bold when selected
        dropdownText.classList.remove("hidden"); // make dropdown text appear
        dropdownArrow.src = "img/arrow-up.svg" // change down arrow to up arrow
    } else {
        questionContainer.classList.remove("expanded");
        question.classList.remove("bold");
        dropdownText.classList.add("hidden");
        dropdownArrow.src = "img/arrow-down.svg";
    }
}

// Reviews Page Filter Elements Shown
var currentSelected = []; // keep track which btn is currently selected (as to not hide other elements too while more than btn is being selected)
function filter(ID) {
    var filterBtn = document.querySelector("#" + ID);
    var allClasses = ["macbook","iphone","ipad","watch","airpods","tv"];
    var filterReviews = []; // elements to filter (remove)
    var elementsToFilter, elementsToRetrieve;

    // get the elements (review box) to hide
    for (var className of allClasses) { // loops through whole array (allClasses)
        if (filterBtn.name == className) {
            currentSelected.push(className);
        } else {
            filterReviews.push(className);
        }
    }

    // hide or review elements
    if (filterBtn.classList.contains("selected")) { // if button is selected
        filterBtn.classList.remove("selected"); // change btn bg color

        // find and remore duplicates in currentSelected array (the duplicated classes are the buttosn clicked twice: selected, then de     select)
        currentSelected.filter((value, index) => this.indexOf(value) !== index); // returning self.indexOf(value) !== index (filter loops through every element inside array)
        // can use 'this' keyword, if no then use array put as argument too)



        // check whether any elements in filterReviews are also in currentSelected (to remove them from filter list, prevent currently selected choices from being hidden away)
        for (var a of currentSelected) {
            for (var b of filterReviews) {
                if (a == b) {
                    var index = filterReviews.indexOf(b); // get index of element inside filterReviews array
                    filterReviews.splice(index,1); // splice(startIndex, amountToDel), deleting the class from filterReviews array
                } 
            }
        }

        // retrieve back hidden elements
        for (var className of filterReviews) {
            elementsToRetrieve = document.getElementsByClassName(className); // getElementsByClassName selects ALL elements with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
            for (var i=0; i < elementsToRetrieve.length; i++) { // need to use this for loop, as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
                elementsToRetrieve[i].classList.remove("hidden"); // shown elements not inside of filterReviews
            }
        }
    } else {
        filterBtn.classList.add("selected");

        // check whether any elements in filterReviews are also in currentSelected (to remove them from filter list, prevent currently selected choices from being hidden away)
        for (var a of currentSelected) {
            for (var b of filterReviews) {
                if (a == b) {
                    var index = filterReviews.indexOf(b); // get index of element inside filterReviews array
                    filterReviews.splice(index,1); // splice(startIndex, amountToDel), deleting the class from filterReviews array
                } 
            }
        }

        // hide elements (those inside of filterReviews)
        for (var className of filterReviews) {
            elementsToFilter = document.getElementsByClassName(className); // getElementsByClassName selects ALL elements (NOTE: returns in NodeList) with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
            for (var i=0; i < elementsToFilter.length; i++) { // need to use for loop to access each element with matched class (as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
                elementsToFilter[i].classList.add("hidden"); // hiding elements included in filterReviews
            }
        }        
    }
}

// Carousel






// Product page modal popup