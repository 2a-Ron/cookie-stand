'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allShops = [];
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
  allShops.push(this);
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
function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  var thisDaysTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var thisHoursTotal = 0;
    for (var j = 0; j < allShops.length; j++) {
      thisHoursTotal += allShops[j].cookiesEachHour[i];
    }
    thisDaysTotal += thisHoursTotal;
    thEl = document.createElement('th');
    thEl.textContent = thisHoursTotal;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = thisDaysTotal;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

makeHeaderRow ();
new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');
new CookieStand('Seatac Airport', 3, 24, 1.2, 'seatac');
new CookieStand('Seattle Center', 11, 38, 3.7, 'seattlecenter');
new CookieStand('Capitol Hill', 20, 38, 2.3, 'caphill');
new CookieStand('Alki', 2, 16, 4.6, 'alki');

(function renderTable() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();
makeFooterRow ();

///////////////////// Admin Panel
/*function showHide() { ???????????????????????????
  if (document.getElementById('manageCookieStands').checked); {
    document.getElementById('manageCookieStands').style.display='none';
  } else {
    document.getElementById('manageCookieStands').style.display='block';
  }
}
*/
var adminList = [
  {
    username: 'Admin',
    password: 'Password'
  },

  {
    username: 'Pat',
    password: 'Cookie'
  }
];

var getUserInfo = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  for(var i = 0; i < adminList.length; i++) {
    if(username === adminList[i].username && password === adminList[i].password) {
      return alert(`Welcome ${username}!`);/*window.open('sales.html', 'newwindow');*/ /*showHide();*/ // showHide() is a work in progress
    }
  }
  alert('Incorrect username or password');
};

var adminPanelInputForm = document.getElementById('adminPanel');
var formProperties = [];

function handleSubmitForm(event) {
  event.preventDefault();
  var formName = event.target.stand.value;
  var formMin = event.target.mincph.value;
  var formMax = event.target.maxcph.value;
  var formAvgsold = event.target.avgsold.value;

  var newStoreFormSubmit = new CookieStand (formName, parseInt(formMin), parseInt(formMax), parseInt(formAvgsold), adminPanelInputForm);
  console.log(newStoreFormSubmit);
  allShops.push(newStoreFormSubmit);
  newStoreFormSubmit.render();//investigate this var name mine could be different...
  console.log(allShops);
  event.target.stand.value = null;
  event.target.mincph.value = null;
  event.target.maxcph.value = null;
  event.target.avgsold.value = null;
  formProperties.unshift(newStoreFormSubmit);
};
adminPanelInputForm.addEventListener('submit', handleSubmitForm);
console.log(formProperties);



