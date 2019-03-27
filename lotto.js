var winners = [];
function lottoNumbers(turnum) {
  winners.push(turnum);
  while (winners.length < 7) {
    var newNumb = Math.floor(Math.random()* 35) + 1;
    //var tal;
    if ((winners.every(function(tal) {
      return newNumb != tal ;
    }))) {
      winners.push(newNumb);
    }
  }
  return winners;
}
