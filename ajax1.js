var httpRequest = new XMLHttpRequest;
var products;
httpRequest.onreadystatechange = function () {
  if(httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      console.log(httpRequest.response);
     products = httpRequest.response;

    } else {
      console.log("Status is " + httpRequest.status);
    }
  } else {
    console.log(httpRequest.readyState);
  }
}
httpRequest.open('GET', 'https://www.hulabeck.se/html/temp/products.json', true);
httpRequest.responseType='json';
httpRequest.send();
