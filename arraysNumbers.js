var numbers = [5,8,3,6,11,3,5,2,17,1];
if (numbers.every(function(tal){
  return tal > 3;
})){
  console.log("All over that 3");
} else {
  console.log("Not all over 3");
}

var someNumbers = numbers.filter(sep);

function sep(n) {
  if (n % 2 == 0) return true;
}

console.log(someNumbers);

var firstOverTen = numbers.find(function(tal) {
  return tal > 10;
})
console.log(firstOverTen);
numbers.forEach(function(tal) {
  console.log(tal);
})

var newNumbers = numbers.map(function(tal) {
  var newTal = tal - 1;
  return newTal;
})
console.log(newNumbers);

var initSum = 0;
var finalSum = numbers.reduce(function(acc, tal) {
  return acc + tal;
}, initSum);
console.log(finalSum);

if (numbers.some(function(num) {
  return num % 3 == 0;
})) {
  console.log("At least one number");
} else {
  console.log("Nope");
}
