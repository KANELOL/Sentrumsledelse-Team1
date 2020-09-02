var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily
//Funksjone som sorterer etter ID, eller annen info. Og hvor mange du vil se eller noe.

function loadProfiles(){
    let profiles = model.companies;
    const chosenWeeks = model.current.weeksToSum;
    $("quickStats").innerHTML = ``;
    for (let profile of profiles) {
        const profileName = profile.name;
        const industry = profile.industry;
        //const votesObj = currentPoll !== null ? currentPoll.votes : {}; // setter voteObj til votes i currentPoll, med mindre det ikke er noen der
        //const date = profile.income[0].date;
        
        //(profile.income != null ? profile.income[0].date : "unknown");
        
        //date == true ? (date = "Ingen dato") : (date = date);
        const profileID = profile.id;
        const averageIncome = calcAverage(chosenWeeks, model.income[profileID]);

        // date ? date = date : date = null;

        $("quickStats").innerHTML +=`<div id="${profile.id}">
        Butikknavn: ${profileName}<br>
        Gjennomsnittlig inntekt siste ${chosenWeeks} uker: ${averageIncome}% <br>
        Forrige registrering: ${null}! <br>
        Bransje: ${industry} <br>
        <button onclick="checkProfile(${profileID})">Vis profil</button> <br>
        </div>
        <div id="incomePercent">This is a test: ${averageIncome}%</div>
        `;
    }

    function calcAverage(weeks,entries) {
        let sum = 0;
    
        if (entries.length > 0) {
            for (let i = 0; i < weeks && i < entries.length; i++) {
                sum += entries[i].percent;
            }
            return (sum/entries.length).toFixed(2);
        } else {
            return "unkown";
        } 
        
    }};
//Egen side med bedrift navn og info



// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25
// const arrSum = arr => arr.reduce((a,b) => a + b, 0) 
// // arrSum = function(arr){
//   return arr.reduce(function(a,b){
//     return a + b
//   }, 0);
// }