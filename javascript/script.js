const home = document.getElementById("home");
const interesses = document.getElementById("interesses");

function interestsClicked(){
    home.classList.add("invisible");
    interesses.classList.remove("invisible");

}

function homeClicked(){
    interesses.classList.add("invisible");
    home.classList.remove("invisible");
}