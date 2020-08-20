var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

// ignore this
var loginStuff = {
    username: null,
    password: null
}

// Lagrer Brukernavn og passord fra index.html form.
function storeInfo() {
    loginStuff.username = $("username-field").value;
    loginStuff.password = $("password-field").value;
}

// Modell For Bedrifter
var profiles = {
    exampleBusiness: {
        name: "Example Business",
        address: "Examplestreet 2",
        industry: "Electronics",
        id: 0001,
        weight: "???",
        logo: "some picture"
    },
    exampleBusiness2: {
        name: "Another Business",
        address: "Some Address",
        industry: "Food",
        id: 0002,
        weight: "???",
        logo: "some picture"
    }
};

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

// example of a new profileTemplate:
// var newProfile = new profileTemplate(name, address, industry, id, weight, logo);
//or
// var newProfileArray = [
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
// ];


// complete history of percentage increase/decrease per week goes here, somehow