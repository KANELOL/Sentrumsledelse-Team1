var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//Funksjone som sorterer etter ID, eller annen info. Og hvor mange du vil se eller noe.

function loadProfiles(){
    let profiles = model.profileStorage;
    const choosenWeeks = model.current.weeksToSum;
    $('quickStats').innerHTML ='';
    for (let profile of profiles) {
        const profileName = profile.name;
        const industry = profile.industry;
        const date = profile.income[0].date;
        const averageIncome = calcAverage(choosenWeeks,profile.income);
        const profileID = profile.id;
    
        $('quickStats').innerHTML +=`<div id="${profile.id}">
        Butikknavn: ${profileName}<br>
        Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
        Forrige registrering: ${date}! <br>
        Bransje: ${industry} <br>
        <button onclick="checkProfile(${profileID})">Vis profil</button> <br>
        </div>
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
//Egen side med bedrift navn og info



// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
// const arrSum = arr => arr.reduce((a,b) => a + b, 0) 
// // arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }