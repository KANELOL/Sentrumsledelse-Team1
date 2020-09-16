var $ = function(id) {return document.getElementById(id);};

function checkProfile(id) {
    const company = model.companies[id];

    $("header").innerHTML = `Name: ${company.name}`;
    $("mainTable").innerHTML = `From: <input id="fromDate" onchange="getDates()" type="date"/>` +
    `To: <input id="toDate" onChange="getDates()" type="date"/>` +
    "<br>Adress: " + company.address +
    "<br>Bransje: " + company.industry +
    `<br>Vekt: <input id="weightInput" value="${company.weight}" type="text"><br>`
    const filteredIncome = model.income.filter(entry => {
        return entry.id === id; 
    });
    console.log(filteredIncome);
    //Tegner opp under vekt
    for (let entry of filteredIncome) {
        console.log("checking week: ", new Date(entry.date).getWeek());
        $("mainTable").innerHTML += 'Uke: '+ new Date(entry.date).getWeek() + ' Prosent vekst: '+ entry.percent+`% <button>Endre</button><br>`;
    }
    drawIncomeTable(id);
};

// Bruker "vis Profil" sine datoer og oppdaterer modellen etter dette.
function getDates() {
    model.current.fromDate = $("fromDate").value
    model.current.toDate = $("toDate").value
}

https://www.w3schools.com/js/js_date_methods.asp

function drawIncomeTable(id) {
    const filteredIncome = model.income.filter(entry => {
        return entry.id === id;
    });

    let today = new Date();
    console.log(new Date(today).getWeek());

    // .toISOString().slice(0, 10);

    const weeksToShow = 5;
    const lastWeeks = [];
    for (let i = 0; i < weeksToShow; i++) {
        let cloneInputs = (JSON.parse(JSON.stringify(today)));
        lastWeeks.push(cloneInputs.slice(0, 10));
        today.setDate(today.getDate() - 7);
    }
    // console.log(lastWeeks);
// lastWeeks[i].getWeek();

    lastWeeks.forEach(date => {
        const outputWeek = new Date(date).getWeek()
        const outputIncome = filteredIncome.filter(entry => {
            return entry.
        });
        $("mainTable").innerHTML += `
        <tr>
            <td>${outputWeek}</td>
            <td>Income goes here</td>
        </tr>`
    });
    // var i = 0;
    // while (i <=28) {
    // var ourDate = new Date();
    // var pastDate = ourDate.getDate() - i;
    // ourDate.setDate(pastDate);
    // weekNr = ourDate.getWeek();
    // $('incomeTable').innerHTML += `Week: ${weekNr}`;
    // console.log(`${i} Dager Siden: `+ ourDate);
    // i +=7;
    // }
}

// const earlier = new Date(2019, 0, 26)
// const later = new Date(2019, 0, 27)
// new Date().toISOString().slice(0, 10);
// //Get today's date using the JavaScript Date object.
// var ourDate = new Date();
 
// //Change it so that it is 7 days in the past.
// var pastDate = ourDate.getDate() - 7;
// ourDate.setDate(pastDate);
 
// //Log the date to our web console.
// console.log(ourDate);

// console.log(earlier < later) // true

// {name: "Super Store 300",
//         address: "Examplestreet 2",
//         industry: "Electronics",
//         id: 0000,
//         weight: 0,
//         logo: "some picture"},



// if (Number(x.innerHTML) > Number(y.innerHTML)) {
//     shouldSwitch = true;
//     break;
//   }
// function BubbleSort(unsortedArray) {
// 	let length = unsortedArray.length;

// 	for (let i = 0; i < length; i++)
// 	{
// 		let notSwap = true;

// 		for (let j = 0; j < length - 1; j++)
// 		{
// 			if (unsortedArray[j] > unsortedArray[j + 1])
// 			{
// 				let temp = unsortedArray[j];
// 				unsortedArray[j] = unsortedArray[j + 1];
// 				unsortedArray[j + 1] = temp;

// 				notSwap = false;
// 			}
// 		}

// 		if (notSwap)
// 		{
// 			break;
// 		}
// 	}
// 	return unsortedArray;
// }













    // $('mainTable').innerHTML =` 
    //     Butikknavn: ${currentProfile.name}<br>
    //     Gjennomsnittlig inntekt siste ${choosenWeeks} uker: ${averageIncome}% <br>
    //     Forrige registrering: ${date}! <br>
    //     Bransje: ${currentProfile.industry} <br>
    //     <button onclick="bingBang(${profile.id})" id="${profile.id}">Endre</button> <br>
    //     `;

    //Kan bruke samme side som newProfilem

      // en filter Funksjon some ble laget 02/09/2020

    // })