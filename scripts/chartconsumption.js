"use strict";
//Google Charts+EIA api
// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart', 'line']
});
// Callback that creates and populates a data table, instantiates the charts, passes in the data and draws it.
google.charts.setOnLoadCallback(getDataEnergyConsumption);
//function to draw the chart
function drawConsumptionChart(freshDataConsumption) {
  freshDataConsumption.unshift(["Year", "Billion BTUs"]);
  var data = google.visualization.arrayToDataTable(freshDataConsumption);
  // Set chart options
  var options = {
    title: 'Electricity Total Consumption (i.e. sold) Florida',
    hAxis: {
      title: 'Year',
      minValue: 0,
      titleTextStyle: {
        color: '#333'
      },
      direction: -1
    },
    vAxis: {
      title: 'Btu in Billion',
      minValue: 0
    },
    legend: 'none',
    curveType: 'function'
  };
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('curvechart_div'));
  chart.draw(data, options);
}
// HTTP Request
function getDataEnergyConsumption() {
  // Create a new request object
  let request = new XMLHttpRequest();
  // Set HTTP Request URL
  let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.TETCB.FL.A";
  // Open a connection
  request.open('GET', requestUrl, true);
  // Callback for when the request completes
  request.onload = function() {
    let theConsumptionData = JSON.parse(request.response).series[0].data;
    drawConsumptionChart(theConsumptionData);
  };
  // Callback for when there's an error
  request.error = function(err) {
    console.log("error is: ", err);
  };
  // Send the request to the specified URL
  request.send();
}