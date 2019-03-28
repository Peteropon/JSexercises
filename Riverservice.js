var riverurl = "http://data.goteborg.se/RiverService/v1.1/MeasureSites/72aebae3-c136-4fa3-9df9-596098bf097e?format=json";
var riverData;

getRiverData();



function getRiverData() {

  var xhRequest = new XMLHttpRequest;

  xhRequest.onreadystatechange = function() {
      if (xhRequest.readyState == 4) {
          if (xhRequest.status == 200) {
              riverData = xhRequest.response;
              console.log(xhRequest.status);
          }
      }
  }

  xhRequest.open("GET", riverurl, true);

  xhRequest.responseType = "json";
  xhRequest.send();

    }


//renderData(data);
