var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily

//Lag in ny butikk.
//Først få opp side med inputs. Navn, Adresse, Industry.
//Kunne legge in informasjon.
//Pushe til profileStorage

function editProfile(id) {

}

function newProfile() { //Lag ny butikk.
    model.outputDiv.innerHTML = `
    Navn:<input type="Navn" value="${model.inputs.name}" oninput="model.inputs.name=this.value"
    /><br>
Adresse:
<input 
    type="Adresse" 
    value="${model.inputs.address}"
    oninput="model.inputs.address=this.value"
/><br>
Industri:
<input 
    type="Industri" 
    value="${model.inputs.industry}"
    oninput="model.inputs.industry=this.value"
/><br>
<button onclick="pushProfile()" style="font-size: 100%">push Profile</button>
`
}
function pushProfile() {
    const inputObj = model.inputs;

    model.profileStorage.push({
        name: inputObj.name,
        address: inputObj.address,
        industry: inputObj.industry,
        id: model.profileStorage.length,
        weight: "???",
        logo: "some picture",
        income: [],
    });
}
    
//     model.outputDiv.innerHTML = `Lag ny profil!
//     <h1>${model.profileStorage[2]}</h1> <br>
//     Name: <input/> <br>
//     Adress: <input/> <br>
//     Industry: <input/> <br>
//     Weight: <input/>`; 
// }


// 
// `wow her er variablen: ${outputDiv)}`