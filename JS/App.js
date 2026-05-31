//datastructuur
let spelers = ["Alex", "Sam", "Noah"];

//Functie 1
function startGame() 
{
  alert("Spel gestart!");
}

//Functie 2
function saveName() 
{
  let name = document.getElementById("name").value;
  document.getElementById("welcome").innerText = "Welkom, " + name + "!";
}
//Controles
function setDifficulty() 
{
  let level = document.getElementById("difficulty").value;

  if (level === "easy") 
  {
    document.getElementById("level").innerText = "Makkelijk spel";
  } else if (level === "medium") 
  {
    document.getElementById("level").innerText = "Normaal spel";
  } else 
  {
    document.getElementById("level").innerText = "Moeilijk spel";
  }
}
//Controlestructuur + functie Input
function checkScore() 
{
  let score = document.getElementById("scoreInput").value;

  if (score > 50) 
  {
    document.getElementById("scoreResult").innerText = "Top score!";
  } else 
  {
    document.getElementById("scoreResult").innerText = "Probeer opnieuw!";
  }
}