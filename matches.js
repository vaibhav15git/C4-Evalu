// write js code here corresponding to matches.html

matchArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr)



var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data) {
    document.querySelector("tbody").innerHTML = "";
    data.forEach(function (el) {

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = el.matchNumber;

        var td2 = document.createElement("td");
        td2.innerText = el.teamAname;

        var td3 = document.createElement("td");
        td3.innerText = el.teamBname;

        var td4 = document.createElement("td");
        td4.innerText = el.matchDate;

        var td5 = document.createElement("td");
        td5.innerText = el.matchVenue;

        var td6 = document.createElement("td")
        td6.innerText = "Favourites";
        td6.style.color = "green"
        td6.addEventListener("click", function () {
            favouriteFun(el)
        })


        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr)

    });


    function favouriteFun(el) {
        // console.log(el);
        favouriteArr.push(el);
        localStorage.setItem("favourites", JSON.stringify(favouriteArr));

    }



    // function cityFilter(){
    //     var selected = document.getElementById("filterVenue").value;
    //     console.log(selected);
    //     var filterValue = favouriteArr.filter(function(el){
    //         return el.matchVenue == selected
    //     });
    //     console.log(filterValue)
    //     displayData(filterValue)
}
