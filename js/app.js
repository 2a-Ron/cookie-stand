'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var theTable = document.getElementById('shell');

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale, id) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.id = id;
  this.calcCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  };
}

CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

var pikePlace = new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');
var seatacAirport = new CookieStand('Seatac Airport', 3, 24, 1.2, 'seatac');
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7, 'seattlecenter');
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3, 'caphill');
var alki = new CookieStand('Alki', 2, 16, 4.6, 'alki');

var allShops = [pikePlace, seatacAirport, seattleCenter, capitolHill, alki];

(function renderTable() {
  makeHeaderRow();
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();
