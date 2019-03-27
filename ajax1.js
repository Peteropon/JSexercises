var xhr = new XMLHttpRequest;
var data;
var url = 'https://www.hulabeck.se/html/temp/response.json';

var header = document.querySelector('header');
var section = document.querySelector('section');

xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.response);
            data = xhr.response;

        } else {
            console.log("Status is " + xhr.status);
        }
    } else {
        console.log(xhr.readyState);
    }


};
xhr.open('GET', url, true);
xhr.responseType='json';
xhr.send();

xhr.onload = function () {
  console.log("Response successfully returned.");
  showProducts(data);
};


function showProducts(jsonObj) {
    var products = jsonObj['products'];

    for (var i = 0; i < products.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPar1 = document.createElement('p');
        var myPar2 = document.createElement('p');
        var myPar3 = document.createElement('p');
        var myPar4 = document.createElement('p');
        var myPar5 = document.createElement('p');
        var myList = document.createElement('ul');
    }

    myH2.textContent = products[i].name;
    myPar1.textContent = "Description: " + products[i].description;
    myPar2.textContent = "Price: " + products[i].consumerPrice;
    myPar3.textContent = "In stock: " + products[i].inStock;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPar1);
    myArticle.appendChild(myPar2);
    myArticle.appendChild(myPar3);

    section.appendChild(myArticle);
}


// function populateHeader(jsonObj) {
//     var myH1 = document.createElement('h1');
//     myH1.textContent = jsonObj.getLocalName;
//     header.appendChild(myH1);
// }
