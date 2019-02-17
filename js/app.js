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

var calcRender = function(store) {
  // debugger;
  for(var i = 0; i < operationHours.length; i++) {
    var rdmNumCust = genRandomNum(store.maxCust, store.minCust);
    store.numCookieSold = Math.floor(store.avgCookieSale * rdmNumCust);
    store.arrTotalCPH.push(store.numCookieSold);
    store.totalSoldPerHour += store.numCookieSold;
    // continue with html render function
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies.`;
    console.log('test:', store.variable);
    store.variable.appendChild(liEl);/*
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies.`;
    seaTacUl.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies.`;
    seaCenterUl.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies.`;
    capHillUl.appendChild(liEl);
    var liEl = document.createElement('li');
    liEl.textContent = `${operationHours[i]}: ${store.arrTotalCPH[i]} cookies.`;
    alkiUl.appendChild(liEl);*/
  }
};
///// objects
var pike = {
  variable: pikeUl,
  location: '1st and Pike',
  minCust: 23, // per hour
  maxCust: 65, // per hour
  avgCookieSale: 6.3, //per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcRender(pike);
console.log('1st and Pike', pike);

var seaTac = {
  variable: seaTacUl,
  location: 'SeaTac Airport',
  minCust: 3, // per hour
  maxCust: 24, // per hour
  avgCookieSale: 1.2, // per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcRender(seaTac);
console.log('SeaTac Airport', seaTac);

var seaCenter = {
  variable: seaCenterUl,
  location: 'Seattle Center',
  minCust: 11, // per hour
  maxCust: 38, // per hour
  avgCookieSale: 3.7, // per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcRender(seaCenter);
console.log('Seattle Center', seaCenter);

var capHill = {
  variable: capHillUl,
  location: 'Capitol Hill',
  minCust: 20, // per hour
  maxCust: 38, // per hour
  avgCookieSale: 2.3, // per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcRender(capHill);
console.log('Capitol Hill', capHill);

var alki = {
  variable: alkiUl,
  location: 'Alki',
  minCust: 2, // per hour
  maxCust: 16, // per hour
  avgCookieSale: 4.6, // per customer
  arrTotalCPH: [],
  numCookieSold: 0,
  totalSoldPerHour: 0,
};

calcRender(alki);
console.log('Alki Beach', alki);
