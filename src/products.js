// Flter Products


// Modal

var body = document.querySelector("body");    
var active_modal; // to refer to the currently openend modal, to close it afterwards (to be accessed by closeModal() function)
                  // the declarations for product, modal cannot be global as need to refresh it with new ID for every prodcut image click

function toggleModal(ID) {
    var imageID = "#" + ID;
    active_modal = imageID;

    var product = document.querySelector(imageID);
    var modal = product.nextElementSibling.nextElementSibling; // selects the next next element placed immediately after it
    openModal(modal);
}

function openModal(modal) {
    modal.classList.add("active"); // add/remove class from classList (from display: none to block)
    body.classList.add("scroll_disabled"); // disables scrolling while modal is opened

    // remove extra padding added to modal (when page is scrolled, static nav not taking space anymore)
    if (window.pageYOffset > 80) { // pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis
        modal.style.padding = "2vw"
    } else {
        modal.style.padding = "6vw 2vw 2vw"  
    }
}

function closeModal() {
    var product = document.querySelector(active_modal);
    var modal = product.nextElementSibling.nextElementSibling; // selects the next next element placed immediately after it

    modal.classList.remove("active"); // add/remove class from classList
    body.classList.remove("scroll_disabled"); // disables scrolling while modal is opened
}

// change modal contents based on selections

var mbpro_16in_currentModel = "name_mbpro_2019_16in"; // model 2019 selected by default
function mbpro_16in(ID) {
    var specs2019 = document.getElementById("mbpro_2019_16in_specs");
    var specs2021 = document.getElementById("mbpro_2021_16in_specs");
    var photo = document.getElementById("photo_mbpro_16in");
    var defaultColorBtn = document.getElementById("mbpro_16in_spacegray"); // to change state to unchecked (leave only the first choice checked when there's switch in model choice)
    var price = 10799;
    var result = document.getElementById("mbpro_16in_price");

    // on selecting a model, change specs and model photo
    if (ID === "name_mbpro_2019_16in") { // chosen 2019 model
        mbpro_16in_currentModel = ID;
        specs2019.style.display = "block"; // show 2019 specs
        specs2021.style.display = "none"; // hide 2021 specs
        photo.src = "img/mbpro-2019-16in(spaceGray).png"; // change displayed photo to 2019 model
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbpro_2021_16in") { // chosen 2021 model
        mbpro_16in_currentModel = ID;
        specs2019.style.display = "none";
        specs2021.style.display = "block";
        photo.src = "img/mbpro-2021-16in(spaceGray).png";
        defaultColorBtn.checked = "true"; // default choice selected back
    }

    // on selecting colour choice, change photo colour choice
    if (mbpro_16in_currentModel === "name_mbpro_2019_16in") { // chosen 2019 model
        if (ID === "mbpro_16in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2019-16in(spaceGray).png";
        } else if (ID === "mbpro_16in_silver") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbpro-2019-16in(silver).png";
        }    
    } else if (mbpro_16in_currentModel === "name_mbpro_2021_16in") { // chosen 2021 model
        if (ID === "mbpro_16in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2021-16in(spaceGray).png";
        } else if (ID === "mbpro_16in_silver") { // chosen silver
            photo.src = "img/mbpro-2021-16in(silver).png";
        }
    }

    // on selecting storage capacity, update estimated price 
    if (ID === "mbpro_16in_512gb") {
        price += 0;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_16in_1tb") {
        price += 1600;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_16in_2tb") {
        price += 3000;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_16in_4tb") {
        price += 5000;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_16in_8tb") {
        price += 8800;
        result.textContent = "RM " + price.toString();
    } 
}

var mbpro_14in_currentModel = "name_mbpro_2021_14in"; // model 2019 selected by default
function mbpro_14in(ID) {
    var photo = document.getElementById("photo_mbpro_14in");
    var defaultColorBtn = document.getElementById("mbpro_14in_spacegray"); // to change state to unchecked (leave only the first choice checked when there's switch in model choice)
    var price = 8799;
    var result = document.getElementById("mbpro_14in_price");

    // on selecting a model, change specs and model photo
    if (ID === "name_mbpro_2021_14in") {
        mbpro_14in_currentModel = ID;
        photo.src = "img/mbpro-2021-14in(spaceGray).png"; 
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbpro_2021_14in") {
        mbpro_14in_currentModel = ID;
        photo.src = "img/mbpro-2021-14in(spaceGray).png";
        defaultColorBtn.checked = "true"; // default choice selected back
    }

    // on selecting colour choice, change photo colour choice
    if (mbpro_14in_currentModel === "name_mbpro_2021_14in") { 
        if (ID === "mbpro_14in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2021-14in(spaceGray).png";
        } else if (ID === "mbpro_14in_silver") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbpro-2021-14in(silver).png";
        }    
    } else if (mbpro_14in_currentModel === "name_mbpro_2021_14in") {
        if (ID === "mbpro_14in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2021-14in(spaceGray).png";
        } else if (ID === "mbpro_14in_silver") { // chosen silver
            photo.src = "img/mbpro-2021-14in(silver).png";
        }
    }

    // on selecting storage capacity, update estimated price 
    if (ID === "mbpro_14in_512gb") {
        price += 0;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_14in_1tb") {
        price += 800;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_14in_2tb") {
        price += 2400;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_14in_4tb") {
        price += 4800;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_14in_8tb") {
        price += 9600;
        result.textContent = "RM " + price.toString();
    } 
}

var mbpro_13in_currentModel = "name_mbpro_13in_4t(2020)"; // model 2019 selected by default
function mbpro_13in(ID) {
    var specs4t_2020 = document.getElementById("mbpro_13in_4t(2020)_specs");
    var specs2t_2020 = document.getElementById("mbpro_13in_2t(2020)_specs");
    var specs2t_2016 = document.getElementById("mbpro_13in_2t(2016)_specs");
    var specsm1_2020 = document.getElementById("mbpro_13in_m1(2020)_specs");

    var photo = document.getElementById("photo_mbpro_13in");
    var defaultColorBtn = document.getElementById("mbpro_13in_spacegray"); // to change state to unchecked (leave only the first choice checked when there's switch in model choice)
    var price = 6399;
    var result = document.getElementById("mbpro_13in_price");

    // on selecting a model, change specs and model photo
    if (ID === "name_mbpro_13in_4t(2020)") { 
        mbpro_13in_currentModel = ID;
        specs4t_2020.style.display = "block"; 
        specs2t_2020.style.display = "none"; 
        specs2t_2016.style.display = "none"; 
        specsm1_2020.style.display = "none"; 
        photo.src = "img/mbpro-2020-13in(spaceGray).png"; // change displayed photo to 2019 model
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbpro_13in_2t(2020)") { 
        mbpro_13in_currentModel = ID;
        specs4t_2020.style.display = "none"; 
        specs2t_2020.style.display = "block"; 
        specs2t_2016.style.display = "none"; 
        specsm1_2020.style.display = "none"; 
        photo.src = "img/mbpro-2020-13in(spaceGray).png";
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbpro_13in_2t(2016)") { 
        mbpro_13in_currentModel = ID;
        specs4t_2020.style.display = "none"; 
        specs2t_2020.style.display = "none"; 
        specs2t_2016.style.display = "block"; 
        specsm1_2020.style.display = "none"; 
        photo.src = "img/mbpro-2020-13in(spaceGray)-m1.png";
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbpro_13in_m1(2020)") { 
        mbpro_13in_currentModel = ID;
        specs4t_2020.style.display = "none"; 
        specs2t_2020.style.display = "none"; 
        specs2t_2016.style.display = "none"; 
        specsm1_2020.style.display = "block"; 
        photo.src = "img/mbpro-2020-13in(spaceGray)-m1.png";
        defaultColorBtn.checked = "true"; // default choice selected back
    }

    // on selecting colour choice, change photo colour choice
    if (mbpro_13in_currentModel === "name_mbpro_13in_4t(2020)" || mbpro_13in_currentModel === "name_mbpro_13in_2t(2020)") {
        if (ID === "mbpro_13in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2020-13in(spaceGray).png";
        } else if (ID === "mbpro_13in_silver") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbpro-2020-13in(silver).png";
        }
    } else if (mbpro_13in_currentModel === "name_mbpro_13in_m1(2020)" || mbpro_13in_currentModel === "name_mbpro_13in_2t(2016)") { 
        if (ID === "mbpro_13in_spacegray") { // chosen space gray
            photo.src = "img/mbpro-2020-13in-m1(spaceGray).png";
        } else if (ID === "mbpro_13in_silver") { // chosen silver
            photo.src = "img/mbpro-2020-13in-m1(silver).png";
        }
    }

    // on selecting storage capacity, update estimated price 
    if (ID === "mbpro_13in_512gb") {
        price += 0;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_13in_1tb") {
        price += 800;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbpro_13in_2tb") {
        price += 2400;
        result.textContent = "RM " + price.toString();
    }
}

var mbair_currentModel = "name_mbair_retina"; // model retina selected by default
function mbair(ID) {
    var photo = document.getElementById("photo_mbair");
    var specs_retina = document.getElementById("mbair_retina_specs");
    var specs_m1 = document.getElementById("mbair_m1_specs");
    var defaultColorBtn = document.getElementById("mbair_spacegray"); // to change state to unchecked (leave only the first choice checked when there's switch in model choice)
    var price = 5399;
    var result = document.getElementById("mbair_price");

    // on selecting a model, change specs and model photo
    if (ID === "name_mbair_retina") {
        mbair_currentModel = ID;
        specs_retina.style.display = "block"; 
        specs_m1.style.display = "none"; 
        photo.src = "img/mbair-retina(spaceGray).png"; 
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_mbair_m1") {
        mbair_currentModel = ID;
        specs_retina.style.display = "none"; 
        specs_m1.style.display = "block"; 
        photo.src = "img/mbair-retina(spaceGray).png";
        defaultColorBtn.checked = "true"; // default choice selected back
    }

    // on selecting colour choice, change photo colour choice
    if (mbair_currentModel === "name_mbair_retina") { 
        if (ID === "mbair_spacegray") { // chosen space gray
            photo.src = "img/mbair-retina(spaceGray).png";
        } else if (ID === "mbair_silver") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbair-retina(silver).png";
        } else if (ID === "mbair_gold") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbair-retina(gold).png";
        }    
    } else if (mbair_currentModel === "name_mbair_m1") {
        if (ID === "mbair_spacegray") { // chosen space gray
            photo.src = "img/mbair-retina(spaceGray).png";
        } else if (ID === "mbair_silver") { // chosen silver
            photo.src = "img/mbair-retina(silver).png";
        } else if (ID === "mbair_gold") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/mbair-retina(gold).png";
        }    
    }

    // on selecting storage capacity, update estimated price 
    if (ID === "mbair_512gb") {
        price += 0;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbair_1tb") {
        price += 800;
        result.textContent = "RM " + price.toString();
    } else if (ID === "mbair_2tb") {
        price += 2400;
        result.textContent = "RM " + price.toString();
    }
}

var i13_currentModel = "name_i13"; // model retina selected by default
function i13(ID) {
    var photo = document.getElementById("photo_i13");
    var specs_i13 = document.getElementById("i13_specs");
    var specs_i13_pro = document.getElementById("i13_pro_specs");
    var specs_i13_mini = document.getElementById("i13_mini_specs");
    var defaultColorBtn = document.getElementById("i13_blue"); // to change state to unchecked (leave only the first choice checked when there's switch in model choice)
    var price = 4899;
    var result = document.getElementById("i13_price");

    // on selecting a model, change specs and model photo
    if (ID === "name_i13") {
        i13_currentModel = ID;
        specs_i13.style.display = "block"; 
        specs_i13_pro.style.display = "none"; 
        specs_i13_mini.style.display = "none"; 
        photo.src = "img/i13(blue).png"; 
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_i13_pro") {
        i13_currentModel = ID;
        specs_i13.style.display = "none"; 
        specs_i13_pro.style.display = "block"; 
        specs_i13_mini.style.display = "none"; 
        photo.src = "img/i13(blue).png"; 
        defaultColorBtn.checked = "true"; // default choice selected back
    } else if (ID === "name_i13_mini") {
        i13_currentModel = ID;
        specs_i13.style.display = "none"; 
        specs_i13_pro.style.display = "none"; 
        specs_i13_mini.style.display = "block"; 
        photo.src = "img/i13(blue).png"; 
        defaultColorBtn.checked = "true"; // default choice selected back
    }

    // on selecting colour choice, change photo colour choice
    if (i13_currentModel === "name_i13" || i13_currentModel === "name_i13_pro" || i13_currentModel === "name_i13_mini") { 
        if (ID === "i13_blue") { // chosen space gray
            photo.src = "img/i13(blue).png";
        } else if (ID === "i13_green") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/i13(green).png";
        } else if (ID === "i13_graphite") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/i13(graphite).png";
        } else if (ID === "i13_gold") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/i13(gold).png";
        } else if (ID === "i13_silver") { // chosen silver  NOTE: must not use if-else, as would overwrite
            photo.src = "img/i13(silver).png";
        }    
    }

    // on selecting storage capacity, update estimated price 
    if (ID === "i13_128gb") {
        price += 0;
        result.textContent = "RM " + price.toString();
    } else if (ID === "i13_256gb") {
        price += 500;
        result.textContent = "RM " + price.toString();
    } else if (ID === "i13_512gb") {
        price += 1400;
        result.textContent = "RM " + price.toString();
    } else if (ID === "i13_1tb") {
        price += 2300;
        result.textContent = "RM " + price.toString();
    }
}



