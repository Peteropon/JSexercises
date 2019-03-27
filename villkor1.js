var gamer = ["sten", "sax", "påse"];
var i1 = Math.floor(Math.random()* 3);
var result1 = gamer.splice(i1, 1);
if(result1 == "sten") console.log("Player one has chosen " + result1);
else if (result1 == "sax") {
  console.log("Player one has chosen " + result1);
} else {
  console.log("Player one has chosen " + result1);
}

var gamer2 = ["sten", "sax", "påse"];
var i2 = Math.floor(Math.random()* 3);
var result2 = gamer2.splice(i2, 1);
if(result2 == "sten") console.log("Player two has chosen " + result2);
else if (result1 == "sax") {
  console.log("Player two has chosen " + result2);
} else {
  console.log("Player two has chosen " + result2);
}

if (result1 == result2) {
  console.log("It's a draw");
} else if ((result1 == "sten" && result2 == "sax") ||
(result1 == "sax" && result2 == "påse") ||
(result1 == "påse" && result2 == "sten")) {
  console.log("Player one wins!");
} else {
  console.log("Player two wins!");
}
