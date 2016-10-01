/*
 * Responsive JS
 * Author: Kayman Brusse
 */

// Function for toggling menu in navbar.
function toggle_navbar_menu() {
    var nav_class = "navbar-container";
    var navbar = document.getElementById("top_navbar");
    if (navbar.className == nav_class) {
        navbar.className += " open";
    } else {
        navbar.className = nav_class;
    }
}
