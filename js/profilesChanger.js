var $ = function(id) { return document.getElementById(id); };

function checkProfile(id) {
    const toDateWeek = "Null";
    const fromDateWeek = "Null";
    model.current.company = id;
    const company = model.companies[id];

    $("header").innerHTML = `Name: ${company.name}`;
    $("mainTable").innerHTML = `
    
        From Uke:${model.current.fromDate} <input id="fromDate" onchange="getFromDate(${id})" type="date"/>        
        To Uke: ${model.current.toDate} <input id = "toDate"    onChange = "getToDate(${id})"    type = "date" / > 
        <br>Navn: ${company.name} 
        <br>Adress: ${company.address} 
        <br>Bransje: ${company.industry} 
        <br> Vekt: ${ company.weight } <br>
        <button onclick = "editStore(${id})" > Rediger < /button>
        <div><button onclick="getWishedWeeks()">Sorter Ønskede Uker</button>
        
        ${drawIncomeTable(id)}
        
        `

    // console.log(filteredIncome);
    //Tegner opp under vekt

};

// Bruker "vis Profil" sine datoer og oppdaterer modellen etter dette.
function getFromDate(id) {
    model.current.fromDate = new Date($("fromDate").value).getWeek();
    // console.log("getDateID: "+ id);
    checkProfile(id);
}

function getToDate(id) {
    model.current.toDate = new Date($("toDate").value).getWeek();
    // console.log("getDateID: "+ id);
    checkProfile(id);
}

https: //www.w3schools.com/js/js_date_methods.asp

    function drawIncomeTable(id) {
        let today = new Date();
        // console.log(new Date(today).getWeek());

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

        let weekNoFromDate = dateTxt => new Date(dateTxt).getWeek();
        let lastWeekWeekNumbers = lastWeeks.map(weekDate => weekNoFromDate(weekDate));
        console.log(lastWeekWeekNumbers);

        return model.income
        .filter(singleIncome => lastWeekWeekNumbers.includes(weekNoFromDate(singleIncome.date)) &&
            singleIncome.id == id)
        .map(singleIncome => `
        <tr>
            <td>Uke: ${weekNoFromDate(singleIncome.date)}</td>
            <td>Income goes here: ${singleIncome.percent}<button>Edit</button></td>
            <td>Id: ${singleIncome.id}</td>
        </tr>`)
        .join('');
        
        // lastWeeks.forEach(date => {
        //     const outputWeek = new Date(date).getWeek()
        //     const filterDates = filteredIncome.filter(entry => {
        //         const outputIncome = new Date(entry.date).getWeek();
        //         return outputIncome == outputWeek
        //     });
        //     console.log(filterDates);
        //     $("mainTable").innerHTML += `
        // <tr>
        //     <td>Uke: ${outputWeek}</td>
        //     <td>Income goes here: ${filterDates[0].percent}<button>Edit</button></td>
        // </tr>`
        // });
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
// For Looop
// function drawIncomeTable2(id) {
//     let today = new Date();
//     // console.log(new Date(today).getWeek());

//     // .toISOString().slice(0, 10);

//     const weeksToShow = 5;
//     const lastWeeks = [];
//     for (let i = 0; i < weeksToShow; i++) {
//         let cloneInputs = (JSON.parse(JSON.stringify(today)));
//         lastWeeks.push(cloneInputs.slice(0, 10));
//         today.setDate(today.getDate() - 7);
//         console.log("lastweek " + lastWeeks);
//     }
//     // console.log(lastWeeks);
//     // lastWeeks[i].getWeek();

//     let weekNoFromDate = dateTxt => new Date(dateTxt).getWeek();

//     let html = '';
//     let lastWeekWeekNumbers = [];
//     for (let weekDate of lastWeeks) {
//         lastWeekWeekNumbers.push(weekNoFromDate(weekDate));
//     }
//     for (let singleIncome of model.income) {
//         if (!lastWeekWeekNumbers.includes(weekNoFromDate(singleIncome.date)) &&
//             singleIncome.id != id) continue;
//         html += `
//         <tr>
//             <td>Uke: ${weekNoFromDate(singleIncome.date)}</td>
//             <td>Income goes here: ${singleIncome.percent}<button>Edit</button></td>
//         </tr>`;
//     }
//     return html;
// }



//Funksjon som tegner opp bedriften og gjør den redigerbar.
function editStore(id) {
    model.current.company = id;
    const company = model.companies[id];
    model.inputs.name = company.name;
    model.inputs.address = company.address;
    model.inputs.industry = company.industry;
    model.inputs.weight = company.weight;
    model.inputs.id = company.id;
    $("header").innerHTML = `Name: ${company.name}`
    $("mainTable").innerHTML = `From: <input id="fromDate" onchange="getDates()" type="date"/>` +
        `To: <input id="toDate" onChange="getDates()" type="date"/>` +
        `<br>Navn: <input type="text" oninput="model.inputs.name = this.value"
     value="${model.companies[id].name}">` +
        `<br>Adresse: <input value="${company.address}" type="text"
     oninput="model.inputs.address = this.value" value="${model.companies[id].address}">` +
        `<br>Bransje: <input oninput="model.inputs.industry = this.value" value="${model.companies[id].industry}"></input>` +
        `<br>Vekt: <input oninput="model.inputs.weight = this.value" value="${model.companies[id].weight}" type="text"><br>
    <button onclick="storeStore(${id})">Lagre</button>`
}
//Funksjon som skal tegne opp ukene du ber om og om det evt er inntekt i de ukene og kunne gjøre
//Dem redigerbare. Funksjonen fungerer for øyeblikket ikke.
function getWishedWeeks() {
    const wishedWeeks = model.current.toDate - model.current.fromDate;
    console.log('GettingWishWeeks ' + wishedWeeks)
    for (let i = 0; i < wishedWeeks; i++) {
        console.log(i);
        $("mainContent").innerHtml += `<div><br>KJØR!</div>`;

    }

}
//Lagrer fra model.inputs og putter inn i valgt bedrift.
function storeStore(id) {
    model.inputs.id = id;
    const pageInputs = model.inputs;
    const company = model.companies[id];
    model.companies[id] = (JSON.parse(JSON.stringify(pageInputs)));
    checkProfile(id);
    clearInputs();
}
//Denne funksjonen er vel egentlig ikke helt nødvendig atm.
function clearInputs() {
    model.inputs.name = '';
    model.inputs.address = '';
    model.inputs.industry = '';
    model.inputs.weight = '';
    model.inputs.id = '';
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

// name = (JSON.parse(JSON.stringify(model.inputs.name)));
//     company.address = (JSON.parse(JSON.stringify(model.inputs.address)));
//     company.industry = (JSON.parse(JSON.stringify(model.inputs.industry)));
//     company.weight = (JSON.parse(JSON.stringify(model.inputs.weight)));

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

// function editPoll(id) {
//     if (id !== null){
//         console.log("Har id");
//     model.app.currentPage = "editPoll";
//      model.app.currentPoll = id;
//      model.inputs.createPoll.options = model.polls[id].options
//     model.inputs.createPoll.question = model.polls[id].question
//      updateView();
// } else{
//     console.log("Ny Poll");
//     model.app.currentPage ="createPoll";
//     model.app.currentPoll = null;
//     model.inputs.createPoll.newAlternative = '';
//             model.inputs.createPoll.question= '';
//             model.inputs.createPoll.options= [];
//             model.inputs.createPoll.usersCanAddAlternatives= true;
//             updateView();

//         }
// }