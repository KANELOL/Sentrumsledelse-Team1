var $ = function(id) {return document.getElementById(id);};
//helper variable for using document.getElementById easily


function updateView() {
    const page = model.current.page;
    if (page === 'login') {
        
    }
    else if (page === 'vote') updateViewVotePage();
}

//Endrer modellen app.currenPage og oppdaterer View.
function changePage(page) {
    model.current.page = page;
    updateView();
}
function update() {
    loadProfiles();

}