//this converts a numerical grade to a letter grade
var grade = prompt("Enter Your Grade");
const letterGrade = grade => {
if (grade >= 93) {
  console.log (`${grade} is an A`);
}else if (grade >= 86) {
  console.log (`${grade} is a B`)
}else if (grade >= 75) {
  console.log (`${grade} is a C`)
}else if (grade >= 70) {
  console.log (`${grade} is a D`)
}else if (grade >= 0) {
  console.log (`${grade} is a F`)
} else {
  console.log ("Input a real numerical grade")
  }
}
letterGrade(grade);
