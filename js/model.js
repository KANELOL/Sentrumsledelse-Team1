var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

const model = {
    current: {
        weeksToSum: 4,
        user: "admin",
        page: "login",
        date: "99.99.99",
        lastLogin: "", // insert current date and time down to minutes, display on page as "5 hours ago", "2 minutes ago", "6 months ago", etc.
    },
    loginStuff: {
        username: "",
        password: ""
    },

    // Modell For Bedrifter
    profileStorage: [
        {name: "Super Store 300",
        address: "Examplestreet 2",
        industry: "Electronics",
        id: 0000,
        weight: "???",
        logo: "some picture",
        income: [
            {percent: 21, date: "Uke 1", logDate: ""},
            {percent: 25, date: "Uke 2", logDate: ""},
            {percent: 23, date: "Uke 3", logDate: ""},
            {percent: -54, date: "Uke 4", logDate: ""}
        ]},
        {name: "Another Business",
        address: "Some Address",
        industry: "Food",
        id: 0001,
        weight: "???",
        logo: "some picture",
        income: [
            {percent: 13, date: "Uke 1", logDate: ""},
            {percent: -51, date: "Uke 2", logDate: ""},
            {percent: 131, date: "Uke 3", logDate: ""},
            {percent: -0.3, date: "Uke 4", logDate: ""}
        ]}
    ]
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