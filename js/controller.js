var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

function passCheck() {
    if (($("username-field").value === model.loginStuff.username) && ($("password-field").value === model.loginStuff.username)) {
        model.current.page = "index";
        changePage();
    }
}

