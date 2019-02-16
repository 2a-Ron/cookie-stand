'use strict';

var operationHours = ['6am', '7am',	'8am',	'9am', '10am', '11am',	'12pm',	'1pm',	'2pm',	'3pm',	'4pm',	'5pm',	'6pm',	'7pm',	'8pm'];

var genRandomNum = function(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
};

var calcTotalCPH = function(store) {
  for(var i = 0; i < operationHours.length; i++) {
    var rdmNumCust = genRandomNum(store.maxCust, store.minCust);
    store.numCookieSold = Math.floor(store.avgCookieSale * rdmNumCust);
    store.arrTotalCPH.push(store.numCookieSold);
    store.totalSoldPerHour += store.numCookieSold;
  }
};

var pike = {
  location: '1st and Pike',
  minCust: 23, // per hour
  maxCust: 65, // per hour
  avgCookieSale: 6.3, //per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,

};
calcTotalCPH(pike);
//pike.calcTotalCPH();
console.log('pike', pike);

var seaTac = {
  location: 'SeaTac Airport',
  minCust: 3, // per hour
  maxCust: 24, // per hour
  avgCookieSale: 1.2, // per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcTotalCPH(seaTac);
console.log('seaTac', seaTac);
/*
var seaCenter = {
  location: 'Seattle Center',
  minCust: '11', // per hour
  maxCust: '38', // per hour
  avgCookieSale: '3.7', // per customer
  // add method to generate random number of customers per hour
  // calc and store amounts of cookies purchased for each hour at each location using avgCookieSale and random num cust/hr
  totalCookies: numTotalCookies // store total cookie count for all hours of operation combined
};

var capHill = {
  location: 'Capitol Hill',
  minCust: '20', // per hour
  maxCust: '38', // per hour
  avgCookieSale: '2.3', // per customer
  // add method to generate random number of customers per hour
  // calc and store amounts of cookies purchased for each hour at each location using avgCookieSale and random num cust/hr
  totalCookies: numTotalCookies // store total cookie count for all hours of operation combined
};

var alki = {
  location: 'Alki',
  minCust: '2', // per hour
  maxCust: '16', // per hour
  avgCookieSale: '4.6', // per customer
  // add method to generate random number of customers per hour
  // calc and store amounts of cookies purchased for each hour at each location using avgCookieSale and random num cust/hr
  totalCookies: numTotalCookies // store total cookie count for all hours of operation combined

};
*/
