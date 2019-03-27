function BankKonto(name, credit) {
  this.name = name;
  this.credit = credit;
  this.withdraw = function(x) {
    if(x <= this.credit){
    this.credit -= x;
    return this.credit;
  }
    else {
      console.log("Not enough credit");
    }
   },
  this.deposit = function(x) { this.credit += x; }
};

var user1 = new BankKonto('Petros', 500);
var user4 = new BankKonto("Max", 300);
console.log(user1);
console.log(user4);


user1.deposit(100);
console.log(user1);
user1.withdraw(1400);
console.log(user1);
user4.withdraw(50);
console.log(user4);
user4.deposit(1000);
console.log(user4);
