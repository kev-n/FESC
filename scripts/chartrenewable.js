"use strict";
//Google Charts+EIA api
// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart']
});
// Callback that creates and populates a data table, instantiates the charts, passes in the data and draws it.
google.charts.setOnLoadCallback(getDataRenewableEnergy);
//function to draw the chart
function drawRenewableChart(freshDataRenewable) {
  freshDataRenewable.unshift(["Year", "Billion BTUs"]);
  var data = google.visualization.arrayToDataTable(freshDataRenewable);
  // Set chart options
  var options = {
    title: 'Renewable Energy Production Florida',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      },
      direction: -1
    },
    vAxis: {
      minValue: 0
    },
    legend: {
      position: 'bottom'
    }
  };
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.AreaChart(document.getElementById('areachart_div'));
  chart.draw(data, options);
}
// HTTP Request
function getDataRenewableEnergy() {
  // Create a new request object
  let request = new XMLHttpRequest();
  // Set HTTP Request URL
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.REPRB.FL.A";
  // Open a connection
  request.open('GET', requestUrl, true);
  // Callback for when the request completes
  request.onload = function() {
    let theRenewableData = JSON.parse(request.response).series[0].data;
    drawRenewableChart(theRenewableData);
  };
  // Callback for when there's an error
  request.error = function(err) {
    console.log("error is: ", err);
  };
  // Send the request to the specified URL
  request.send();
}