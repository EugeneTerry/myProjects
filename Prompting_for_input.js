var num = prompt("Enter Your Number"); // opens a prompt for the top for users to enter a value
function testSize(num) {
if (num < 5) {
  console.log ("Tiny")
}else if (num < 10) {
  console.log ("Small")
}else if (num < 15) {
  console.log ("Medium")
}else if (num < 20) {
  console.log ("Large")
}else if (num >= 20) {
  console.log ("Huge")
} else {
  console.log ("Change Me")
  }
}
testSize(num);
