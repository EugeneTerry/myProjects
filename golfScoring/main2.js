var btn = document.getElementById("btn");

function golfScore(par, strokes) {
  if (strokes == 1) {
    document.getElementById("myText").innerHTML = "You hit a Hole-in-one!";
  }
  else if (par == strokes) {
    document.getElementById("myText").innerHTML = "You are at Par";
  }
  else if (strokes <= par - 2) {
    document.getElementById("myText").innerHTML = "You scored an Eagle";
  }
  else if (strokes == par - 1) {
    document.getElementById("myText").innerHTML = "You scored a Birdie";
  }
  else if (strokes == par + 1) {
    document.getElementById("myText").innerHTML = "You Bogeyed";
  }
  else if (strokes == par + 2) {
    document.getElementById("myText").innerHTML = "You Double Bogeyed";
  }
  else if (strokes > par + 2) {
    document.getElementById("myText").innerHTML = "It's time to go home now";
  }
}

btn.addEventListener("click", (e)=> {
  e.preventDefault();
  var par = parseInt(document.getElementById("par").value);
  var stroke = parseInt(document.getElementById("stroke").value);  

  golfScore(par,stroke);
  //This adds the variable (myScore) to the dom's output in a sentance. 
  var pi = "Please add a " ;
  var ei = " to your score card.";
  var myScore = stroke - par;
  document.getElementById("myBook").innerHTML = pi + myScore + ei;
})
