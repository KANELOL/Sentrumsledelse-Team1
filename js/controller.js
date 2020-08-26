var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

function passCheck() {
    if ($("username-field").value === "admin" && $("password-field").value === "pass") {
        window.location.href = "overview.html";
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
    // Can add more shit here
}