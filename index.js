// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm",).addEventListener("submit", matchSubmit)

matchArr =JSON.parse(localStorage.getItem("schedule")) || [];

function matchSubmit(){
    event.preventDefault();

    var matchObj = {
        matchNumber : masaiForm.matchNum.value,
        teamAname : masaiForm.teamA.value,
        teamBname : masaiForm.teamB.value,
        matchDate : masaiForm.date.value,
        matchVenue : masaiForm.venue.value,

    };
    
     matchArr.push(matchObj);
     localStorage.setItem("schedule",JSON.stringify(matchArr));
    console.log(matchArr);
}
