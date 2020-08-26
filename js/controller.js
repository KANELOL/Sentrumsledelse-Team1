var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

function passCheck() {
    if ($("username-field").value === model.loginStuff.username && $("password-field").value === model.loginStuff.username) {
        model.current.page = "overview"
        changePage("overviefw")
    }
}

// The template for different business profiles
class profileTemplate {
    constructor (name, address, industry, id, weight, logo)
    {
        this.name = name;
        this.address = address;
        this.industry = industry;
        this.id = id;
        this.weight = weight;
        this.logo = logo;
    }
    //can add more shit here
}