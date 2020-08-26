var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    //$('quickStats').innerHTML =`${model.profileStorage[a]}!!!`
    const profile = model.profileStorage[id];
    console.log(profile.income[0].percent);
    $('quickStats').innerHTML = '';
    for (let entry of profile.income) {
        $('quickStats').innerHTML += 'Uke: '+ entry.date + ' Prosent Vekst: '+ entry.percent+'% <br>';
    }
    // const income = profile.income;
    // for (let entry of income) {
    //     $('quickStats').innerHTML =`${entry.percent}!!!`
    // }
};

    // $('quickStats').innerHTML =` 
    //     Butikknavn: ${currentProfile.name}<br>
    //     Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
    //     Forrige registrering: ${date}! <br>
    //     Bransje: ${currentProfile.industry} <br>
    //     <button onclick="bingBang(${profile.id})" id="${profile.id}">Endre</button> <br>
    //     `;