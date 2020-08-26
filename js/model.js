var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

const model = {
    current: {
        user: "admin",
        page: "login"
    },
    
    // ignore this
    loginsStuff: {
        username: null,
        password: null
    },

    // Modell For Bedrifter
    profiles: {
        exampleBusiness: {
            name: "Example Business",
            address: "Examplestreet 2",
            industry: "Electronics",
            id: 0001,
            weight: "???",
            logo: "some picture", 
        },
        exampleBusiness2: {
            name: "Another Business",
            address: "Some Address",
            industry: "Food",
            id: 0002,
            weight: "???",
            logo: "some picture"
        }
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