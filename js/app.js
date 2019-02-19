'use strict';

var operationHours = ['6am', '7am',	'8am',	'9am', '10am', '11am',	'12pm',	'1pm',	'2pm',	'3pm',	'4pm',	'5pm',	'6pm',	'7pm',	'8pm'];
var pikeUl = document.getElementById('1standPike');
var seaTacUl = document.getElementById('seaTac');
var seaCenterUl = document.getElementById('seaCenter');
var capHillUl = document.getElementById('capHill');
var alkiUl = document.getElementById('alki');

///// global functions
var genRandomNum = function(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
};

var getGrandTotal = function(acc, val) { // if the accumulator isn't defined it defaults to the first item in the array
  console.log('test acc: ', acc);
  return acc + val; // returns the current accumulator plus the value
};

var calcRender = function(store) {
  for(var i = 0; i < operationHours.length; i++) {
    var rdmNumCust = genRandomNum(store.maxCust, store.minCust);
    store.numCookieSold = Math.floor(store.avgCookieSale * rdmNumCust); // equation gets total cookies per hour
    store.arrTotalCPH.push(store.numCookieSold); // pushing total cookies sold per hour into the total cookies per hour array.
    store.totalSoldPerHour += store.numCookieSold;
    var answer = store.arrTotalCPH.reduce(getGrandTotal); // reducing total cookies per hour array and getting the sum
    console.log('TEST REDUCE: ', answer);
    // continue with html render function
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies. Grand Total: ${answer}`;
    console.log('test:', store.variable);
    store.variable.appendChild(liEl);
  }
};

/*
var vals = [5, 4, 1, 2, 9];
var sum = function(acc, val) {
  console.log('test acc: ', acc);
  return acc + val;
};
var answer = vals.reduce(sum);
console.log('TEST REDUCE: ', answer);
*/
///// Constructor Function
var CookieStand = function (variable, location, minCust, maxCust, avgCookieSale, arrTotalCPH, numCookieSold, totalSoldPerHour) {
  this.variable = variable;
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.arrTotalCPH = arrTotalCPH;
  this.numCookieSold = numCookieSold;
  this.totalSoldPerHour = totalSoldPerHour;
};
// New Cookie Stand Instances
var pike = new CookieStand(pikeUl, '1st and Pike', 23, 65, 6.3, [], 0, 0);
var seaTac = new CookieStand(seaTacUl, 'seaTac Airport', 3, 24, 1.2, [], 0, 0);
var seaCenter = new CookieStand(seaCenterUl, 'Seattle Center', 11, 38, 3.7, [], 0, 0);
var capHill = new CookieStand(capHillUl, 'Capitol Hill', 20, 38, 2.3, [], 0, 0);
var alki = new CookieStand(alkiUl, 'Alki', 2, 16, 4.6, [], 0, 0);
calcRender(pike);
calcRender(seaTac);
calcRender(seaCenter);
calcRender(capHill);
calcRender(alki);
console.log('1st and Pike', pike);
console.log('SeaTac Airport', seaTac);
console.log('Seattle Center', seaCenter);
console.log('Capitol Hill', capHill);
console.log('Alki Beach', alki);
