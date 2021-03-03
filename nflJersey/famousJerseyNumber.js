var btn = document.getElementById("btn");
 
  var testObj = {
    12: "Joe Namath",
    16: "Joe Montana",
    19: "Johnny Unitas",
    22: "Derick Henry",
    27: "Eddie George"
};

btn.addEventListener("click", (e)=> {
  e.preventDefault();
    var par = parseInt(document.getElementById("par").value);
  var pi = "The famous NFL player's name is " ;
  document.getElementById("myBook").innerHTML = pi + testObj[par];
})