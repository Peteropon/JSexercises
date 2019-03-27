var httpRequest = new XMLHttpRequest;


fetch('https://www.hulabeck.se/html/temp/products.json').then(function(response) {
  return response.json();
}).then(json => console.log(json))
