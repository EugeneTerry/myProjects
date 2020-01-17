var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

if (strokes == 1) {
  console.log ("Hole-in-one!")
  return "Hole-in-one!"
}else if (par == strokes) {
  console.log ("Par")
  return "Par"
}else if (strokes <= par - 2) {
  console.log ("Eagle")
  return "Eagle"
}else if (strokes == par - 1) {
  console.log ("Birdie")
  return "Birdie"
}else if (strokes == par + 1) {
  console.log ("Bogey")
  return "Bogey"
}else if (strokes == par + 2) {
  console.log ("Double Bogey")
  return "Double Bogey"
}else if (strokes > par + 2) {
  console.log ("Go Home!")
  return "Go Home!"

  return "Change Me";
}
}
golfScore(5, 7);
