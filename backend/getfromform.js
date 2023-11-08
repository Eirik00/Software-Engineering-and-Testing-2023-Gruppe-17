var tourList = [];
if(JSON.parse(localStorage.getItem("tourList")) !== null){
    tourList = JSON.parse(localStorage.getItem("tourList"));
}

if(localStorage.getItem("login") === null){
    window.location.href="../login/index.html";
}
const bruker = JSON.parse(localStorage.getItem("login"));



function saveTour() {
    const error = document.getElementById("errormsg");
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const accessibility = document.getElementById("accessibility").checked;

    if (name != "" && description != "" && price != "") {
        tourList.push(createTour(bruker.username, name, description, price, "", accessibility));
        console.log("Hey")
        localStorage.setItem("tourList", JSON.stringify(tourList)); // oppdaterer otur array lista
    }else{
        error.innerHTML = "* Du må fylle ut alle feltene!"
    }
}

/*
Ikke ferdig
function saveUser() {
    const user = loginFunction();
    localStorage.setItem(user);
}*/

if (typeof window === "undefined") {
    module.exports = {saveTour: saveTour(), displayTours: displayTours()};
}