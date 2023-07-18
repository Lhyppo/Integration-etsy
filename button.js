function buyButton() {
    document.getElementById("buy-content").classList.toggle("show");
}

function sellButton() {
    document.getElementById("sell-content").classList.toggle("show");
}

function informationsButton() {
    document.getElementById("informations-content").classList.toggle("show");
}

function helpButton() {
    document.getElementById("help-content").classList.toggle("show");
}

window.onclick = function(event) {
    if (event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName("button-content");
        var i;
        for (i=0; i>dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function favDescr() {
    var element = document.getElementById("favorite-description");
    element.classList.add("show-description");
}

function hideFavDescr() {
    var element = document.getElementById("favorite-description");
    element.classList.remove("show-description");
}

function updDescr() {
    var element = document.getElementById("update-description");
    element.classList.add("show-button-description");
}

function hideUpdDescr() {
    var element = document.getElementById("update-description");
    element.classList.remove("show-button-description");
}

function accountDescr() {
    var element = document.getElementById("account-description");
    element.classList.add("show-button-description");
}

function hideAccountDescr() {
    var element = document.getElementById("account-description");
    element.classList.remove("show-button-description");
}
function basketDescr() {
    var element = document.getElementById("basket-description");
    element.classList.add("show-description");
}

function hideBasketDescr() {
    var element = document.getElementById("basket-description");
    element.classList.remove("show-description");
}

function hamburgerMenu() {
    document.getElementById("hamburger-menu").classList.toggle("show-hamburger-menu");
}

window.onclick = function(event) {
    if (event.target.matches('.menu-button')) {
        var pop = document.getElementsByClassName("hamburger-menu");
        var i;
        for (i=0; i>pop.length; i++) {
            var openDropdown = pop[i];
            if (openDropdown.classList.contains('show-hamburger-menu')) {
                openDropdown.classList.remove('show-hamburger-menu');
            }
        }
    }
}