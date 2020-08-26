var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//Funksjone som sorterer etter ID, eller annen info. Og hvor mange du vil se eller noe.

function loadProfiles(){
    const profiles = model.profileStorage;
    const choosenWeeks = model.currentInfo.weeksToSum;
    
    for (let profile of profiles) {
        const name = profile.name;
        const industry = profile.industry;
        const date = profile.income[0].date;
        const averageIncome = calcAverage(choosenWeeks,profile.income);

        $('quickStats').innerHTML +=` 
        Butikknavn: ${name}<br>
        Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
        Forrige registrering: ${date}! <br>
        Bransje: ${industry} <br>
        <button onclick="bingBang(${profile.id})" id="${profile.id}">Endre</button> <br>
        `;
    }
    function calcAverage(weeks,income) {
        let sum = 0;
        for (let i = 0; i < weeks; i++) {
            sum += income[i].percent;
        }   
        return (sum/income.length).toFixed(2);
    } 
};
//Blir en funksjon i sin egen lag/endre butikk.
function bingBang(id) {
    console.log("Bang bing " + id);
};
//Egen side med bedrift navn og 



// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
// const arrSum = arr => arr.reduce((a,b) => a + b, 0) 
// // arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }



// var profiles = {
//     Lindex: {
//         name: "Example Business",
//         address: "Examplestreet 2",
//         industry: "Electronics",
//         id: 0001,
//         weight: "???",
//         logo: "some picture"
//     },
//     Rema1000: {
//         name: "Example Business",
//         address: "Examplestreet 2",
//         industry: "Electronics",
//         id: 0001,
//         weight: "???",
//         logo: "some picture"
//     },


// const model = {
//     //
//     app: {
//         currentPoll: 1,
//         loggedInUser: 'per',
//         currentPage: 'createPoll', // denne blir endret av changePage ettersom man klikker på "stem" eller "lag poll"
//     },

//     users: [
//         { username: 'per', name: 'Per', password: '123' },
//         { username: 'pål', name: 'Pål', password: '123' },
//         { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
//     ],
//     //lager options som er inne i pollen, og gir laget poll en id som vi kan referere til senere
//     //
//     inputs: {
//         createPoll: {
//             pollId: null,
//             newAlternative: '',
//             question: 'Hvem er den tøffeste læreren ved GET Academy?',
//             options: ['Geir', 'Eskil', 'Terje'],
//             usersCanAddAlternatives: true,
//         },
//     },
//     //jeg tror at denne fyller seg med pollene vi lager???
//     polls: []
// };
// // function testStuff(profile) {
//     return console.log(Object.keys(profile).values);
// };