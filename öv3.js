var keso = {
  pris: 10,
  bästFöre: "30/03",
  kcal: 100,
  tillverkare: "Arla"
};


function info(obj, obj_name){
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}


for (var i in keso) {
  if (keso.hasOwnProperty(i)) {
    console.log(i + ': ' + keso[i] + '\n');  }
}

var numbers = [5,8,3,6,7,3,5,2,7,1];
var newNumbers = [];
numbers.forEach(bla);
numbers.forEach(printAll);


function printAll(value){
  console.log(value);
}

function bla(value, index, array){
  if(!Array.isArray(numbers)) return;
  if(index % 2 == 0) return; else {
    newNumbers.push(value);
  }
}

newNumbers.forEach(printAll);
