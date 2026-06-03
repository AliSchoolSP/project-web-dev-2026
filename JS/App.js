//datastructuur
const spelers = ["Alex", "Sam", "Noah"];
let aantalKnoppen = 1;

//Functie 1
function startGame() 
{
  alert("Spel gestart!");
}

//Functie 2
function saveName() 
{
  if (name.trim() !== "") 
    {
      spelers.push(name);
      document.getElementById("welcome").innerText 
      = "Welkom, " + name + "! Totaal aantal spelers: " + spelers.length;
      console.log(spelers);
    } 
  else 
    {
    alert("Vul eerst een naam in!");
    }
}
//Controles
function setDifficulty() 
{
  let level = document.getElementById("difficulty").value;

  if (level === "easy") 
  {
    document.getElementById("level").innerText = "Makkelijk spel";
  } 
  else if (level === "medium") 
  {
    document.getElementById("level").innerText = "Normaal spel";
  } 
  else 
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
  } 
  else 
  {
    document.getElementById("scoreResult").innerText = "Probeer opnieuw!";
  }
}

function ontwijkKnop() {
  let knop = document.getElementById("wegrenKnop");
  let speelveld = document.getElementById("speelveld");

  let x = Math.random() * (speelveld.clientWidth - knop.clientWidth);
  let y = Math.random() * (speelveld.clientHeight - knop.clientHeight);
  
  knop.style.position = "absolute";
  knop.style.left = x + "px";
  knop.style.top = y + "px";
}

function dupliceerKnop() {
  if (aantalKnoppen < 20) {
    aantalKnoppen++;
    let container = document.getElementById("knopContainer");
    let nieuweKnop = document.createElement("button");
    
    nieuweKnop.innerText = "Knop " + aantalKnoppen;
    nieuweKnop.onclick = dupliceerKnop; // Zorgt dat de nieuwe knop ook dupliceert
    container.appendChild(nieuweKnop);
  }
}
function wisselThema() {
  let hoofdBlok = document.getElementById("gameMain");
  if (hoofdBlok.style.backgroundColor === "purple") {
    hoofdBlok.style.backgroundColor = "white";
    hoofdBlok.style.color = "black";
  } else {
    hoofdBlok.style.backgroundColor = "purple";
    hoofdBlok.style.color = "yellow";
  }
}