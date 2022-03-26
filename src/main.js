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
<<<<<<< HEAD
        questionContainer.classList.add("expanded");
        question.classList.add("bold");
        dropdownText.classList.remove("hidden");
        dropdownArrow.src = "img/arrow-up.svg"
    } else {   
=======
        questionContainer.classList.add("expanded"); // change bg color of dropdown box
        question.classList.add("bold"); // make question bold when selected
        dropdownText.classList.remove("hidden"); // make dropdown text appear
        dropdownArrow.src = "img/arrow-up.svg" // change down arrow to up arrow
    } else {
>>>>>>> 51b031aefa6180bcc531956b93c55ee880cdfa76
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
    var elementsToFilter;

    // get the elements (review box) to hide
    for (var className of allClasses) { // loops through whole array (allClasses)
        if (filterBtn.name == className) {
            currentSelected.push(className);
        } else {
            filterReviews.push(className);
        }
    }
            
                        // debugging
                        console.log("------------------------------------------");
                        console.log(filterReviews);
                        console.log(currentSelected);    
                        console.log(duplicates);
    

    // hide or review elements
    if (filterBtn.classList.contains("selected")) { // if btn selected
        filterBtn.classList.remove("selected"); // change btn bg color

        // FILTERING currentSelected array, find and remore duplicates in currentSelected array (the duplicated classes are the buttons clicked twice: selected, then de     select)
        var duplicates = currentSelected.filter((value, index) => currentSelected.indexOf(value) != index); // returning self.indexOf(value) !== index (filter loops through every element inside array, if index of re-occuring element does not match its original index, means it's duplicated)    filter(functionName), the function in it contains rules to filter the number
        
                // debugging
                console.log("------------------------------------------");
                console.log(filterReviews);
                console.log(currentSelected);
                console.log(duplicates);
        
        // CONT HERE: LOOP ONLY GOES ONCE (SMTG IS WRONG WITH THE LOOP)
        // removing duplicates out of currentSelected; and add back to filter reviews
        for (var i of duplicates) {
            for (var j of currentSelected) {

                // debugging
                console.log(i, "-", j);

                if (i == j) {
                    var index = currentSelected.indexOf(j); // identify index of element inside filterReviews array
                    currentSelected.splice(index,1); // splice(startIndex, amountToDel), deleting the class from filterReviews array
                    filterReviews.push(currentSelected[index]); // since button unselected, need to add it to filterReviews to hide its elements
                    // filterReviews array will have duplicates (after for loops are completed while pushing elements in), but wouldn't affect the hiding process
                }
            }
        }
        // clear duplicate array (everytime after duplicates has been resolved in currentSelected)
        for (var k=0; k < duplicates.length; k++) {
            duplicates.pop(); // every 'pop' removes last element
        }

        // debugging
        console.log("------------------------------------------");
        console.log(filterReviews);
        console.log(currentSelected);
        console.log(duplicates);



        // check whether any elements in filterReviews are also in currentSelected (to remove them from filter list, prevent currently selected choices from being hidden away)
        for (var a of currentSelected) {
            for (var b of filterReviews) {
                if (a == b) {
                    var index = filterReviews.indexOf(b); // get index of element inside filterReviews array
                    filterReviews.splice(index,1); // splice(startIndex, amountToDel), deleting the class from filterReviews array
                } 
            }
        }

        // debugging
        console.log("------------------------------------------");
        console.log(filterReviews);
        console.log(currentSelected);
        console.log(duplicates);

        // hide elements (those inside of filterReviews)
        for (var className of filterReviews) {
            elementsToFilter = document.getElementsByClassName(className); // getElementsByClassName selects ALL elements with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
            for (var i=0; i < elementsToFilter.length; i++) { // need to use this for loop, as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
                elementsToFilter[i].classList.add("hidden"); // shown elements not inside of filterReviews
            }
        }

        // // retrieve back all elements, total 6 (when not one single button is selected)
        // var counter = 0;
        // let allFilterBtn = document.getElementsByClassName("filter-btn"); // returns node list, so need to for loop through it to access every single element (filter-btn, total 6)
        // for (var i=0; i < allFilterBtn.length; i++) {
        //     if (!(allFilterBtn[i].classList.contains("selected"))) { // if all the filter btn is not selected
        //         counter++; // add up number of filter btn not selected
        //     }
        // }   
        // if (counter == 6) { // when all filter btn are not selected
        //     // retrieving back all elements
        //     var elementsToRetrieve;
        //     for (var className of allClasses) {
        //         elementsToRetrieve = document.getElementsByClassName(className); // getElementsByClassName selects ALL elements with matched class name; cannot use query selector as it only selects the first matched element only (not ALL)
        //         for (var i=0; i < elementsToRetrieve.length; i++) { // need to use this for loop, as getElementsByClassName returns a nodeList, so need to access every retrieved matched element using index (e.g there are 10 elements with class 'macbook'. so the elementsToFilter at that certain loop is 10)
        //             elementsToRetrieve[i].classList.remove("hidden"); // shown elements not inside of filterReviews
        //         }
        //     }
        // }

    } else { // if btn unselected
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

                            // debugging
                            console.log("------------------------------------------");
                            console.log(filterReviews);
                            console.log(currentSelected);    
                            console.log(duplicates);
        
    }
}

// Carousel






// Product page modal popup