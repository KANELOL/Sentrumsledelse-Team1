var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//et kjempeobjekt som heter f.ex "model" og alt smusha inni der.


const model = {
    currentInfo: {
        weeksToSum: 4,
        user: "admin",
        page: "business5",
        date: "99.99.99",
        lastLogin: "", // insert current date and time down to minutes, display on page as "5 hours ago", "2 minutes ago", "6 months ago", etc.
    },
    
    // Modell For Bedrifter
    profileStorage: [
        {name: "Super Store 300",
        address: "Examplestreet 2",
        industry: "Electronics",
        id: 0001,
        weight: "???",
        logo: "some picture",
        income: [
            {percent: 1, date: "Uke 1", logDate: ""},
            {percent: 2, date: "Uke 2", logDate: ""},
            {percent: 3, date: "Uke 3", logDate: ""},
            {percent: 4, date: "Uke 4", logDate: ""}
        ]},
        {name: "Another Business",
        address: "Some Address",
        industry: "Food",
        id: 0002,
        weight: "???",
        logo: "some picture",
        income: [
            {percent: 13, date: "Uke 1", logDate: ""},
            {percent: -51, date: "Uke 2", logDate: ""},
            {percent: -11, date: "Uke 3", logDate: ""},
            {percent: -0.3, date: "Uke 4", logDate: ""}
        ]}
    ]
}


    // Lagrer Brukernavn og passord fra index.html form.  
    //controllerstæsj

    // Modell for Statistikk - datoer og inntekt
    // var bigobject = {

    //     exampleBusiness2 = [
    //         {income: "1%", date: "Uke 1", logDate: ""},
    //         {income: "1%", date: "Uke 2", logDate: ""}
    // ]
    // };
        // Temporary data, can be history
// var tempLog = {
//     income: "",
//     date: "",
// };






// maybe???
// Siste innlogging, siste income
// bedriftsArray[0].push(lastIncome) bedriftsArray[0].income.value

// {id: 5, date: Mar 8 2012 08:00:00 AM}
// example of a new profileTemplate:
// var newProfile = new profileTemplate(name, address, industry, id, weight, logo);
// or
// var newProfileArray = [
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
//     new profileTemplate(name, address, industry, id, weight, logo);
// ];


// complete history of percentage increase/decrease per week goes here, somehow