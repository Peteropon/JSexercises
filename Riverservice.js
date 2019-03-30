var riverurl = "http://data.goteborg.se/RiverService/v1.1/MeasureSites/72aebae3-c136-4fa3-9df9-596098bf097e?format=json";
var riverData;


var btn = document.querySelector("button");
btn.addEventListener("click", function() {
  alert("The listener is listening");
  getRiverData();
});

function getRiverData() {

  var xhRequest = new XMLHttpRequest;

  xhRequest.onreadystatechange = function() {
      if (xhRequest.readyState == 4) {
          if (xhRequest.status == 200) {
              riverData = xhRequest.response;
              //measureParam = riverData.MeasureParameters;
              console.log(xhRequest.status);
              renderData(riverData);
          }
      }
  }

  xhRequest.open("GET", riverurl, true);

  xhRequest.responseType = "json";
  xhRequest.send();

  }

function makeList(site) {
  var innerList = document.createElement("ul");
  innerList.innerHTML = "";
  var listItem1 = document.createElement("li");
  listItem1.innerHTML = "Name of site: " + site.Code;
  innerList.appendChild(listItem1);
  var listItem2 = document.createElement("li");
  listItem2.innerHTML = "Lat: " + site.Lat;
  innerList.appendChild(listItem2);
  var listItem3 = document.createElement("li");
  listItem3.innerHTML = "Long: " + site.Long;
  innerList.appendChild(listItem3);
  var divItem = document.createElement("div");
  divItem.innerText = "Measurements: ";
  let mList = document.createElement("ul");
  mList.innerHTML = "";
  var mDiv = document.createElement("div");
  site.MeasureParameters.forEach( (object) => {
    let meas = document.createElement("p");
    meas.innerText = object.Code + ": " + object.CurrentValue;
    mDiv.appendChild(meas);
    //mDiv.appendChild(mDivList);

  })
  divItem.appendChild(mDiv);
  innerList.appendChild(divItem);
  var element = document.getElementById('site');
  element.innerHTML = "";
  element.appendChild(innerList);
}

function renderData(jsonObject){
  var list = document.querySelector("ol")
  list.innerHTML = "";
  riverData.forEach((site)=> {
    var listItem = document.createElement("li");
    makeList(site);
    listItem.innerHTML = document.getElementById("site").innerHTML;
    list.appendChild(listItem);
    //var innerListItem = document.createElement("li");
  })
}
