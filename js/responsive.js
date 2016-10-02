/*
 * Responsive JS
 * Author: Kayman Brusse
 */

var nav_class = "navbar-container";

// Function for toggling menu in navbar.
function toggle_navbar_menu() {
    var navbar = document.getElementById("top_navbar");
    if (navbar.className == nav_class) {
        navbar.className += " open";
    } else {
        navbar.className = nav_class;
    }
}

// Function for closing menu in navbar.
function close_navbar_menu() {
    var navbar = document.getElementById("top_navbar");
    if (navbar.className == nav_class) {}
    else {
        navbar.className = nav_class;
    }
}
