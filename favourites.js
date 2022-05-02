// write js code here corresponding to favourites.html

var favouriteArr = JSON.parse(localStorage.getItem("favourites"));
displayData(favouriteArr)

function displayData(data){
    document.querySelector("tbody").innerHTML = "";
    data.forEach(function(el){

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
        td6.innerText = "Delete";
        td6.style.color = "red"
        td6.setAttribute("class", "deleteText")
        td6.addEventListener("click",function(){
            deleteFun(el,index)
            
        });


        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)

    })

}

function deleteFun(el,index){
    console.log(el)
    favouriteArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
    window.location.reload();
}

