var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//const outputDiv = document.getElementById(id);


const model = {
    outputDiv: $('quickStats'),
    current: {
        company: null,
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
    inputs: {
        name: "",
        address: "",
        industry: ""
    },  
     // Modell For Bedrifter
    companies: [
        {name: "Super Store 300",
        address: "Examplestreet 2",
        industry: "Electronics",
        id: 0000,
        weight: "???",
        logo: "some picture"},
        
        {name: "Another Business",
        address: "Some Address",
        industry: "Food",
        id: 0001,
        weight: "???",
        logo: "some picture"},
    ],
    income: [
        {
            id: 0001,
            entries: [
                {percent: 45, date: "some date"},
                {percent: 3, date: "some date"},
                {percent: 234, date: "some date"}
            ]
        },

        {
            id: 0002,
            entries: [
                {percent: 13, date: "some date"},
                {percent: 3, date: "some date"},
                {percent: 35, date: "some date"}
            ]
        }
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



    // class profileTemplate {
    //     constructor (name, address)
    //     {
    //         this.name = name;
    //         this.address = address;
    //     //     this.industry = industry;
    //     //     this.id = id;
    //     //     this.weight = weight;
    //     //     this.logo = logo;
    //     //     this.income = income;
    //     }
    // },

    // exempel