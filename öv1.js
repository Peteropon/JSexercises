var maxvalue = 100;

for (var i = 0; i <= maxvalue; i++) {
  console.log(i);
}

for (var i = maxvalue; i === 1; i=i-3) {
  console.log(i);
}

for (var i = 0; i <= maxvalue; i++) {
  console.log(i);
  if(i===20) break;
}
