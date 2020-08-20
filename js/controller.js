var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

function passCheck() {
    if ($("username-field").value === "admin" && $("password-field").value === "pass") {
        window.location.href = "overview.html";
    }
}