
const home = document.getElementById("home");
const education = document.getElementById("education")


// const interesses = document.getElementById("interesses");
// function interestsClicked(){
//     home.classList.add("invisible");
//     interesses.classList.remove("invisible");

// }

function homeClicked(){
    education.classList.add("invisible");
    home.classList.remove("invisible");
}

function educationClicked(){
    home.classList.add("invisible");
    education.classList.remove("invisible");
    
}