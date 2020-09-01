var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    //Trenger å lage knapper som kan endre / redigere currentStore info
    // const profile = model.companies[id];
    $('header').innerHTML ="Name: "+ model.companies[id].name;
    model.outputDiv.innerHTML = "Adress: "+ model.companies[id].address +"<br>"+model.companies[id].industry +"<br>";
    for (let entry of model.income) {
        model.outputDiv.innerHTML += 'Uke: '+ entry.date + ' Prosent Vekst: '+ entry.percent+'% <br>';
    }
};
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