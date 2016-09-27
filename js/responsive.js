/*
 * Responsive JS
 * Author: Kayman Brusse
 */

// Function for toggling menu in navbar.
function toggle_navbar_menu() {
    var navbar = document.getElementById("top_navbar");
    if (navbar.className == "navbar") {
        navbar.className += " open";
    } else {
        navbar.className = "navbar";
    }
}
