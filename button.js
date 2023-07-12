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