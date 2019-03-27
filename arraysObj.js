var people = [
  {
    "name": "Mia",
    "age": 24,
    "hobbies": ["tv-spel", "sport", "musik"]
  },
  {
    "name": "Jon",
    "age": 44,
    "hobbies": ""
  },
  {
    "name": "Sam",
    "age": 3,
    "hobbies": "tv-spel"
  },
  {
    "name": "Kim",
    "age": 33,
    "hobbies": [
      "musik", "dans"
    ]
  },
  {
    "name": "Zoe",
    "age": 45,
    "hobbies": "frimärkssamling"
  }
]
console.log(people);

if (people.every(function(person) {
  return person.age > 40;
})) {
  console.log("All are over 40 yo");
} else {
  console.log("There are some younger than 40.");
}

function checkNames(n) {
  if ((n.name.indexOf('a') !== -1) || (n.name.indexOf('A') !== -1)) {
        return true;
      }
}

var namesWithA = people.filter(checkNames);
console.log(namesWithA);

var firstWithMusik = people.find(function(n) {
  return n.hobbies.find(function(h) {
    return h == "musik";
  });
})
console.log(firstWithMusik);

people.forEach(function(n) {
  console.log(n.name);
})

var peopleUpdated = people.map(function(being) {
  var newBeing = {};
  newBeing = being;
  newBeing.married = {};
  if (newBeing.age % 2 == 0) {
    newBeing.married = false;
    return newBeing;
  } else {
    newBeing.married = true
    return newBeing;
  }
})
console.log(peopleUpdated);

var initSum = 0;
var totalAge = peopleUpdated.reduce(function(acc, pers) {
  return acc + pers.age;
}, initSum);
console.log(totalAge);

if ((peopleUpdated.some(function(per) {
  return per.married == true;
})) && (peopleUpdated.some(function(per) {
  return per.hobbies.find(function(h) {
    return h == "sport";
  });
}))) {
  console.log("Yes! ");
} else {
  console.log("No :( ");
}
