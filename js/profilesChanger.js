var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    // Trenger å lage knapper som kan endre / redigere currentStore info
    // const profile = model.companies[id];
    $('header').innerHTML ="Name: "+ model.companies[id].name;
    $("quickStats").innerHTML = `From: <input id="fromDate" onChange="getDates()" type="date" value=""/>  `+
    `To: <input id="toDate" onChange="getDates()" type="date" value=""/>`+
    "</br>Adress: "+ model.companies[id].address +"<br>"+model.companies[id].industry +"<br>";
    // console.log(model.income.filter(function(a, b){return a.id-b.id}));
  
    // Sorterer etter dato fra siste registrert dato til første registrert dato
    // function timeframeAverage(start, end) {
    // model.income.sort(function(start,end) {
    //     return new Date(end.date) - new Date(start.date);
    // })};

    // Checking for correct id
    // Filter lager en ny liste av en annen liste
    var filteredIncome = model.income.filter(entry => {
        return entry.id === id;
    });
    
    for (let entry of filteredIncome) {
        console.log("checking week: ", new Date(entry.date).getWeek());
        $("quickStats").innerHTML += 'Uke: '+ new Date(entry.date).getWeek() + ' Prosent vekst: '+ entry.percent+`% <button>Endre</button><br>`;
    }
};

// Bruker "vis Profil" sine datoer og oppdaterer modellen etter dette.
function getDates() {
    model.current.fromDate = document.getElementById("fromDate").value
    model.current.toDate = document.getElementById("toDate").value
}
    // const income = profile.income;
    // for (let entry of income) {
    //     $('quickStats').innerHTML =`${entry.percent}!!!`
    // }


    // $('quickStats').innerHTML =` 
    //     Butikknavn: ${currentProfile.name}<br>
    //     Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
    //     Forrige registrering: ${date}! <br>
    //     Bransje: ${currentProfile.industry} <br>
    //     <button onclick="bingBang(${profile.id})" id="${profile.id}">Endre</button> <br>
    //     `;

    //Kan bruke samme side som newProfilem

      // en filter Funksjon some ble laget 02/09/2020

    // })