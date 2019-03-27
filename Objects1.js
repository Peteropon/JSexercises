var obj1 = {
  name: "My",
  email: "fa@fafd.com",
  userLevel: "high"
}

for (let h in obj1){
  console.log(h + ": " + obj1[h]);
}

obj1.name = "Emmy";

console.log(obj1['name']);

obj1['age'] = 32;
console.log(obj1);
delete obj1.userLevel;
console.log(obj1);
obj1['pri'] = function(){console.log("My name is " + obj1.name);}
obj1.pri();
