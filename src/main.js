// Contact us page FAQs dropdown

function dropdown(ID) {
    var questionContainer = document.querySelector("#" + ID); // '#ID' (e.g ID = 'question-1', it would then be '#question-1')
    var dropdownText = questionContainer.querySelector(".dropdown-text"); // searches for specified class under its parent only (limited scope)
    var dropdownArrow = questionContainer.querySelector(".dropdown-arrow");

    if (dropdownText.classList.contains("hidden")) { // checks if element contains class 'hidden'
        questionContainer.classList.add("expanded");
        dropdownText.classList.remove("hidden");
        dropdownArrow.src = "img/arrow-up.svg"
    } else {
        questionContainer.classList.remove("expanded");
        dropdownText.classList.add("hidden");
        dropdownArrow.src = "img/arrow-down.svg";
    }
}

// Carousel






// Product page modal popup