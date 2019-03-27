var url = "https://api.exchangeratesapi.io/latest?base=";
var data;
var exchangeRates = ['EUR', 'USD'];
getData("SEK");

var selector = document.querySelector('select');
selector.addEventListener('change', function(e) {
  let countryCode = selector[selector.selectedIndex].value;
  getData(countryCode);
})


function getData(countryCode) {
  const xhr = new XMLHttpRequest;

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
      if (xhr.status == 200) {
        data = xhr.response;
        //console.log(data);
        renderData(data);
      }
    }
  }
  xhr.open("GET", url + countryCode, true);
  xhr.responseType = "json";
  xhr.send();
}


function renderData(data) {
  let lista = document.querySelector('ul');
  lista.innerHTML = "";

  exchangeRates.forEach( (rate)=> {
    var listItem = document.createElement('li');
    let course = data.rates[rate];
    listItem.innerHTML =  rate + ": " + course;
    lista.appendChild(listItem);
  } )

}
