var startNumber = 13;
var maxValue = 100000;

var i = 0;
while(startNumber <= maxValue){
  startNumber = startNumber*2;
  console.log(startNumber);
  i++;
}
console.log(i-1);


var numbers = [3,6, 9, 14, 2, 17, 5, 12,4, 9, 6,10, 9, 11, 4, 8, 13, 30, 9, 17];
console.log(numbers);
var sum = 0;
while(sum <= 100){
  sum += numbers[Math.floor(Math.random()* 21)];
  console.log(sum);
}

var kakfat = ["dröm", "wienerbr", "semla", "damms", "kokostopp", "hallongr", "kanelb","kladdk", "morott", "mars"];
while(kakfat.length > 1){
  var i = Math.floor(Math.random()* (kakfat.length));
  var randomkaka = kakfat.splice(i,1);
  console.log(randomkaka[0]);
  console.log(kakfat.length)
}
