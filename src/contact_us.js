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
        dropdownArrow.src = "img/arrow-up.svg"; // change down arrow to up arrow
    } else {
        questionContainer.classList.remove("expanded");
        question.classList.remove("bold");
        dropdownText.classList.add("hidden");
        dropdownArrow.src = "img/arrow-down.svg";
    }
}
