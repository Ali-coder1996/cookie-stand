'use strict';

//create empty array to push each store info into
let storesArray = [];

//global let with hours open
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// we need to access the table that is in the DOM
let cookieTable = document.getElementById('main-div');


// =======================================================

//create constructor to make our store object
function CookieStand(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){
  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  //empty array to push sales figures into
  this.cookieStandSales = [];
  //create day totals counter value
  this.dailySalesTotals = 0;
  storesArray.unshift(this);
}

// ======================================================

// create header row with hours
function cookieStandHours(){

  let thElement = document.createElement('th');
  thElement.textContent = '';
  cookieTable.appendChild(thElement);

  //use for loop to push hours array to table header
  for (let i = 0; i < hoursOpen.length; i++) {
    thElement = document.createElement('th');
    //create th content
    thElement.textContent = hoursOpen[i];
    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
  //create daily totals column
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  cookieTable.appendChild(thElement);
}

// ======================================================
// Create the new store instances
new CookieStand(2, 16, 4.6, 'Lima');
new CookieStand(20, 38, 2.3, 'Paris');
new CookieStand(11, 38, 3.7, 'Dubai');
new CookieStand(3, 24, 1.2, 'Tokay');
new CookieStand(23, 65, 6.3, 'seattle');

// ======================================================

//creating function to generate random num and push to empty array
CookieStand.prototype.salesFiguresGenerator = function (){

  for (let i = 0; i < hoursOpen.length; i++) {

    let avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.cookieStandSales.push(avgCookiePerHour);

    this.dailySalesTotals = avgCookiePerHour += this.dailySalesTotals;
  }
};
// =====================================================
//render method defined here
CookieStand.prototype.render = function (){

  this.salesFiguresGenerator();

  //create tr
  let trElement = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for (let i = 0; i < hoursOpen.length; i++) {

    //create td
    tdElement = document.createElement('td');
    // create td content
    tdElement.textContent = this.cookieStandSales[i];
    // append td to tr
    trElement.appendChild(tdElement);
  }

  // totals sales for each location for the day
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySalesTotals;
  trElement.appendChild(tdElement);
  //append th to table in DOM
  cookieTable.appendChild(trElement);
};

//=======================================================================
// create function to push total hourly sales into the footer row
function cookieStandHourlyTotals(){
  //create row & data element, content, append
  let trElement = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);

  let grandTotal = 0;

  //use for loop to push hours array to table header
  for (let i = 0; i < hoursOpen.length; i++) {
    //counter is here to increment the nested loop ++
    let hourlyCounter = 0;
    //nested loop iterates through stores array and add value at stores position
    for (let store = 0; store < storesArray.length; store++) {
      hourlyCounter += storesArray[store].cookieStandSales[i];
    }

    tdElement = document.createElement('td');
    //create the content
    tdElement.textContent = hourlyCounter;
    trElement.appendChild(tdElement);
    grandTotal = hourlyCounter += grandTotal;


  }
  // calculates and appends grand total to table
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.appendChild(tdElement);
  // console.log(grandTotal);
  //append th to table in DOM
  cookieTable.appendChild(trElement);
}

// =============================================================
// function used to render all store rows with one call
function renderAllStores(){
  for(let i in storesArray){
    storesArray[i].render();
  }
}

// =============================================================



//add event listener, listening for event, put at bottom for code readability


//Now we need to call our functions -- in the proper order
cookieStandHours();
renderAllStores();
cookieStandHourlyTotals();
