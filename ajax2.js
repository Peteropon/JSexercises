var url = "https://api.exchangeratesapi.io/latest?base=SEK";
var data;
const xhr = new XMLHttpRequest;
var exchangeRates = ['USD', 'EUR', 'GBP', 'NZD'];

xhr.onreadystatechange = function() {
  if(xhr.readyState == 4){
    if (xhr.status == 200) {
      data = xhr.response;
      //console.log(data);
      renderData(data);
    }
  }
}

function renderData(data) {
  let lista = document.querySelector('ul');

  exchangeRates.forEach( (rate)=> {
    var listItem = document.createElement('li');
    let course = data.rates[rate];
    listItem.innerHTML =  rate + ": " + course;
    lista.appendChild(listItem);
  } )

}

xhr.open("GET", url, true);
xhr.responseType = "json";
xhr.send();
