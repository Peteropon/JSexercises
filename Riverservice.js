var riverurl = "http://data.goteborg.se/RiverService/v1.1/MeasureSites/72aebae3-c136-4fa3-9df9-596098bf097e?format=json";
var riverData;


var btn = document.querySelector("button");
btn.addEventListener("click", function() {
  alert("ok so far");
  getRiverData();
});

function getRiverData() {

  var xhRequest = new XMLHttpRequest;

  xhRequest.onreadystatechange = function() {
      if (xhRequest.readyState == 4) {
          if (xhRequest.status == 200) {
              riverData = xhRequest.response;
              console.log(xhRequest.status);
              renderData(riverData);
          }
      }
  }

  xhRequest.open("GET", riverurl, true);

  xhRequest.responseType = "json";
  xhRequest.send();

  }

function renderData(jsonObject){
  var list = document.querySelector("ol")
  list.innerHTML = "";
  riverData.forEach((site)=> {
    var listItem1 = document.createElement("li");
    listItem1.innerHTML = "Code: " + site.Code;
    list.appendChild(listItem1);
    var listItem2 = document.createElement("li");
    listItem2.innerHTML = "Lat: " + site.Lat;
    list.appendChild(listItem2);
    var listItem3 = document.createElement("li");
    listItem3.innerHTML = "Long: " + site.Long;
    list.appendChild(listItem3);

    //var innerList = document.createElement("ul");
    //innerList.innerHTML = "";
    //var innerListItem = document.createElement("li");
    //innerList.appendChild(innerListItem);
  })
}
