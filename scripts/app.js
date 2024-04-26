let questionDisplay = document.getElementById("questionDisplay");

let musicBtn = document.getElementById("musicBtn").addEventListener("click", function(){
    getMusic();
});

let videogameBtn = document.getElementById("videogameBtn").addEventListener("click", function(){
    getVideogame();
});

let sportsBtn = document.getElementById("sportsBtn").addEventListener("click", function(){
    getSports();
});

async function getMusic(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    questionDisplay.innerText = apiResponse.results["0"].question;
}

async function getVideogame(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    questionDisplay.innerText = apiResponse.results["0"].question;
}

async function getSports(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple").then((Response) => Response.json());
    console.log(apiResponse);
    questionDisplay.innerText = apiResponse.results["0"].question;
}

