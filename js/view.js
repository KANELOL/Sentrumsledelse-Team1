var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

function changePage(page) {
    model.current.page = page;
    if (page === 'login') {
        window.location.href = "login.html";
    }
    else if (page === 'overview') {
        window.location.href = "overview.html";
    }
}