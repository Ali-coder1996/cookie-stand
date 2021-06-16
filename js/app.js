'use strict';

//create empty array to push each store info into
let storesArray = [];

//global let with hours open
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// we need to access the table that is in the DOM
let salesData = document.getElementById('sales-data');

let form = document.getElementById('addNewCity');
console.log(form);

// =======================================================

//create constructor to make our store object
function CookieStand(minCustPerHour, maxCustPerHour, avgCookiePerSale, name) {
  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.name = name;
  //empty array to push sales figures into
  this.cookieStandSales = [];
  //create day totals counter value
  this.dailySalesTotals = 0;
  storesArray.push(this);
}

// ======================================================
CookieStand.prototype.render = function () {

  //create tr
  let trElement = document.createElement('tr');
  salesData.appendChild(trElement);
  //append th to table in DOM
  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (let i = 0; i < hoursOpen.length; i++) {

    //create td
    let tdElement = document.createElement('td');
    // create td content
    tdElement.textContent = this.cookieStandSales[i];
    // append td to tr
    trElement.appendChild(tdElement);
  }

  // totals sales for each name for the day
  thElement = document.createElement('th');
  thElement.textContent = this.dailySalesTotals;
  trElement.appendChild(thElement);
};

// create header row with hours
function cookieStandHours() {
  let trElement1 = document.createElement('tr');
  salesData.appendChild(trElement1);
  let thElement1 = document.createElement('th');
  thElement1.textContent = '';
  trElement1.appendChild(thElement1);

  //use for loop to push hours array to table header
  for (let i = 0; i < hoursOpen.length; i++) {
    thElement1 = document.createElement('th');
    //create th content
    thElement1.textContent = hoursOpen[i];
    //append th to table in DOM
    trElement1.appendChild(thElement1);
  }
  //create daily totals column
  thElement1 = document.createElement('th');
  thElement1.textContent = 'Daily Totals';
  trElement1.appendChild(thElement1);
}

// ======================================================
// Create the new store instances
let lima = new CookieStand(2, 16, 4.6, 'Lima');
let paris = new CookieStand(20, 38, 2.3, 'Paris');
let dubai = new CookieStand(11, 38, 3.7, 'Dubai');
let tokay = new CookieStand(3, 24, 1.2, 'Tokay');
let seattle = new CookieStand(23, 65, 6.3, 'seattle');

// ======================================================

//creating function to generate random num and push to empty array
CookieStand.prototype.salesFiguresGenerator = function () {

  for (let i = 0; i < hoursOpen.length; i++) {

    let avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.cookieStandSales.push(avgCookiePerHour);

    this.dailySalesTotals += avgCookiePerHour;
  }
};
// =====================================================
//render method defined here


function formCity(event) {
  event.preventDefault();
  let max = event.target.maxCustPerHour.value;
  let min = event.target.minCustPerHour.value;
  let avg = event.target.avgCookiePerSale.value;
  let name = event.target.cityName.value;

  for (let i = 0; i < storesArray.length; i++) {
    if (name.toLowerCase() === storesArray[i].name.toLowerCase()) {
      console.log(storesArray);
      alert('This city is already exist !');
      break;
    } else {
      if (i === storesArray.length - 1) {
        let newCity = new CookieStand(min, max, avg, name);
        newCity.salesFiguresGenerator();
        document.getElementById('sales-data').deleteRow(storesArray.length);
        newCity.render();
        cookieStandHourlyTotals();
        break;
      }
    }

  }


}
form.addEventListener('submit', formCity);
//=======================================================================
// create function to push total hourly sales into the footer row
function cookieStandHourlyTotals() {
  //create row & data element, content, append
  let trElement2 = document.createElement('tr');
  salesData.appendChild(trElement2);
  let thElement2 = document.createElement('th');
  thElement2.textContent = 'Total';
  trElement2.appendChild(thElement2);

  let grandTotal = 0;

  //use for loop to push hours array to table header
  for (let i = 0; i < hoursOpen.length; i++) {
    //counter is here to increment the nested loop ++
    let hourlyCounter = 0;
    //nested loop iterates through stores array and add value at stores position
    for (let store = 0; store < storesArray.length; store++) {
      hourlyCounter += storesArray[store].cookieStandSales[i];
    }

    let thElement3 = document.createElement('th');
    //create the content
    thElement3.textContent = hourlyCounter;
    trElement2.appendChild(thElement3);
    grandTotal += hourlyCounter;

  }
  // calculates and appends grand total to table
  let thElement4 = document.createElement('th');
  thElement4.textContent = grandTotal;
  trElement2.appendChild(thElement4);
  // console.log(grandTotal);
  //append th to table in DOM
}



seattle.salesFiguresGenerator();

tokay.salesFiguresGenerator();

dubai.salesFiguresGenerator();

paris.salesFiguresGenerator();

lima.salesFiguresGenerator();

cookieStandHours();

seattle.render();
tokay.render();
dubai.render();
paris.render();
lima.render();
cookieStandHourlyTotals();
