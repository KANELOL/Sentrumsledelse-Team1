var $ = function(id) { return document.getElementById(id); };


function filterIncome() {

}

function loadCompanies() {
    let companies = model.companies;
    if (model.current.sortKey) {
        companies = sortFunction(model.companies);
    }
    model.current.company = null;
    const chosenWeeks = model.current.weeksToSum;
    $("header").innerHTML = `Oversikt`;
    $("mainTable").innerHTML = `
    <tr><th>up'n down</th>
        <th id="index">Index</th>
        <th id="companyName" onclick="sorting(this.id)">Company Name</th>
        <th id="lastWeeks">Gjennomsnittlig inntekt ${chosenWeeks} siste uker</th>
        <th id="lastUpdate">Forrige registrering</th>
        <th id="industry" onclick="sorting(this.id)">Bransje</th>
        <th id="weight" onclick="sorting(this.id)">Vekt ↓</th>
        <th>ViKtig</th>
    </tr>`;

    for (let company of model.companies) {
        const filteredIncome = model.income.filter(entry => {
            return entry.id === company.id;
        });
        const averageIncome = calcAverage(chosenWeeks, filteredIncome)
        $("mainTable").innerHTML += `
             <table id="outputTable">   
        <tr>
                    <td>
                    <input type="button" value="up" class="up" onclick="editSortOrder(${company.id,true})">
                    <input type="button" value="down" class="down" onclick="editSortOrder(${company.id,false})" /></td>
                    </td>
                    
    
                    <td id="tableIndex">${company.id + 1} </td>
                    <td>${company.name} </td>
                    <td>${averageIncome}%</td>
                    <td>4 uker siden</td>
                    <td>${company.industry}</td>
                    <td>${company.weight}</td>
                    <td><button onclick="checkProfile(${company.id})">Vis/Endre/Leggtill profil</button></td>
                </tr>`;

    }

    function editSortOrder(companyId, goUp) {
        const company = model.companies.find(c => c.id == companyId);
        const currentSortOrder = company.sortOrder;
        const newSortOrder = company.sortOrder + (goUp ? -1 : 1);
        const companyToSwapSortOrderWith = model.companies.find(c => c.sortOrder == newSortOrder);
        if (companyToSwapSortOrderWith == null) return;
        companyToSwapSortOrderWith.sortOrder = company.sortOrder;
        company.sortOrder = newSortOrder;
        // update view
    }

    function calcAverage(weeks, entries) {
        let sum = 0;
        if (entries.length > 0) {
            for (let i = 0; i < weeks && i < entries.length; i++) {
                sum += entries[i].percent;
            }
            return (sum / entries.length).toFixed(2);
        } else {
            return "unkown";
        }

    }
};

function sorting(sortKey) {
    model.companies.sort((a, b) => {
        return b[sortKey] - a[sortKey];
    })

    console.log(sortKey);
    loadCompanies();
    // sortCompany.sort((a, b) => {
    //     return a.id - b.id;
    // })
    console.log(model.companies);
}



// function upNdown(direction)
// {
//     var rows = document.getElementById("table").rows,
//         parent = rows[index].parentNode;
//      if(direction === "up")
//      {
//          if(index > 1){
//             parent.insertBefore(rows[index],rows[index - 1]);
//             // when the row go up the index will be equal to index - 1
//             index--;
//         }
//      }

//      if(direction === "down")
//      {
//          if(index < rows.length -1){
//             parent.insertBefore(rows[index + 1],rows[index]);
//             // when the row go down the index will be equal to index + 1
//             index++;
//         }
//      }
// }

//             <html>
// <body >
//   <table border=5 bordercolor=red>
//     <tr>
//       <td>
//         Fisrt Column of Outer Table
//       </td>
//       <td>
//         <table border=5 bordercolor=green>
//           <tr>
//             <td>
//               First row of Inner Table
//             </td>
//           </tr>
//           <tr>
//             <td>
//               Second row of Inner Table
//             </td>
//           </tr>
//         </table>
//       </td>
//   </tr>
//   </table>
// </body>
// </html>