/**
 * Created by Ben on 8/16/2014.
 */
function showWork() {
    document.getElementById("workData").classList.remove("hidden");
    document.getElementById("workData").classList.add("show");
}

function showPlay(){
    document.getElementById("playData").classList.remove("hidden");
    document.getElementById("playData").classList.add("show");
}

function showOrigins(){
    document.getElementById("originsData").classList.remove("hidden");
    document.getElementById("originsData").classList.add("show");

}

function hideAllData(){
    var allDataElements = document.querySelectorAll(".benjampData");
    for (var i = 0; i < allDataElements.length; i++){
        allDataElements[i].classList.remove("show");
        allDataElements[i].classList.add("hidden");
    }
}