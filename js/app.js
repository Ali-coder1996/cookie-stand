'use strict';

let seattles = document.getElementById('seattle');
let Tokyo = document.getElementById('Tokyo');
let Dubai = document.getElementById('Dubai');
let Paris = document.getElementById('Paris');
let Lima = document.getElementById('Lima');
let mainDiv = document.getElementById('main-div');
let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23,
  maximumCustomerEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
  ],
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  customerPerHoure: function () {
    return Math.floor(
      Math.random() *
        (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) +
        this.minimumCustomerEachHour
    );
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < this.hours.length; i++)
      this.cookiesSoldPerHourArray.push(
        Math.floor(this.customerPerHoure() * this.averageCookiesSoldPerCustomer)
      );
  },

  render: function () {
    let unorderList = document.createElement('ul');
    mainDiv.appendChild(unorderList);
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i];
      //   console.log(this.dailyStoreTotal);
      let listItem = document.createElement('li');
      seattles.appendChild(listItem);
      listItem.textContent =`${this.hours[i]}` + this.cookiesSoldPerHourArray[i];
      if (i===14){
        let listItems = document.createElement('li');
        seattles.appendChild(listItems);
        listItems.textContent =`Total: ${this.dailyStoreTotal} cookies`;
        console.log(this.dailyStoreTotal);
      }
    }
  },
};

seattle.customerPerHoure();
seattle.calcCookiesSoldEachHour();
seattle.render();

let Toky = {
  name: 'Tokyo',
  minimumCustomerEachHour: 3,
  maximumCustomerEachHour: 24,
  averageCookiesSoldPerCustomer: 1.2,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  customerPerHoure: function () {
    return Math.floor(
      Math.random() *
        (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) +
        this.minimumCustomerEachHour
    );
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < this.hours.length; i++)
      this.cookiesSoldPerHourArray.push(
        Math.floor(this.customerPerHoure() * this.averageCookiesSoldPerCustomer)
      );
  },

  render: function () {
    let unorderList = document.createElement('ul');
    mainDiv.appendChild(unorderList);
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i];
      let listItem = document.createElement('li');
      Tokyo.appendChild(listItem);
      listItem.textContent =`${this.hours[i]}` + this.cookiesSoldPerHourArray[i];
      if (i===14){
        let listItemss = document.createElement('li');
        Tokyo.appendChild(listItemss);
        listItemss.textContent =`Total: ${this.dailyStoreTotal} cookies`;
        console.log(this.dailyStoreTotal);
      }
    }
  },
};
Toky.customerPerHoure();
Toky.calcCookiesSoldEachHour();
Toky.render();

let Dubi = {
  name: 'Dubai',
  minimumCustomerEachHour: 11,
  maximumCustomerEachHour: 38,
  averageCookiesSoldPerCustomer: 3.7,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  customerPerHoure: function () {
    return Math.floor(
      Math.random() *
        (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) +
        this.minimumCustomerEachHour
    );
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < this.hours.length; i++)
      this.cookiesSoldPerHourArray.push(
        Math.floor(this.customerPerHoure() * this.averageCookiesSoldPerCustomer)
      );
  },

  render: function () {
    let unorderList = document.createElement('ul');
    mainDiv.appendChild(unorderList);
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i];
      let listItem = document.createElement('li');
      Dubai.appendChild(listItem);
      listItem.textContent =
        `${this.hours[i]}` + this.cookiesSoldPerHourArray[i];
      if (i===14){
        let listItemss = document.createElement('li');
        Dubai.appendChild(listItemss);
        listItemss.textContent =`Total: ${this.dailyStoreTotal} cookies`;
        console.log(this.dailyStoreTotal);
      }
    }
  },
};
Dubi.customerPerHoure();
Dubi.calcCookiesSoldEachHour();
Dubi.render();

let pari = {
  name: 'Paris',
  minimumCustomerEachHour: 20,
  maximumCustomerEachHour: 38,
  averageCookiesSoldPerCustomer: 2.3,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  customerPerHoure: function () {
    return Math.floor(
      Math.random() *
        (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) +
        this.minimumCustomerEachHour
    );
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < this.hours.length; i++)
      this.cookiesSoldPerHourArray.push(
        Math.floor(this.customerPerHoure() * this.averageCookiesSoldPerCustomer)
      );
  },

  render: function () {
    let unorderList = document.createElement('ul');
    mainDiv.appendChild(unorderList);
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i];
      let listItem = document.createElement('li');
      Paris.appendChild(listItem);
      listItem.textContent =
        `${this.hours[i]}` + this.cookiesSoldPerHourArray[i];
      if (i===14){
        let listItemss = document.createElement('li');
        Paris.appendChild(listItemss);
        listItemss.textContent =`Total: ${this.dailyStoreTotal} cookies`;
        console.log(this.dailyStoreTotal);
      }
    }
  },
};
pari.customerPerHoure();
pari.calcCookiesSoldEachHour();
pari.render();

let lim = {
  name: 'Lima',
  minimumCustomerEachHour: 2,
  maximumCustomerEachHour: 16,
  averageCookiesSoldPerCustomer: 4.6,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  customerPerHoure: function () {
    return Math.floor(
      Math.random() *
        (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) +
        this.minimumCustomerEachHour
    );
  },

  calcCookiesSoldEachHour: function () {
    for (let i = 0; i < this.hours.length; i++)
      this.cookiesSoldPerHourArray.push(
        Math.floor(this.customerPerHoure() * this.averageCookiesSoldPerCustomer)
      );
  },

  render: function () {
    let unorderList = document.createElement('ul');
    mainDiv.appendChild(unorderList);
    for (let i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i];
      let listItem = document.createElement('li');
      Lima.appendChild(listItem);
      listItem.textContent =
        `${this.hours[i]}` + this.cookiesSoldPerHourArray[i];
      if (i===14){
        let listItemss = document.createElement('li');
        Lima.appendChild(listItemss);
        listItemss.textContent =`Total: ${this.dailyStoreTotal} cookies`;
        console.log(this.dailyStoreTotal);
      }
    }
  },
};
lim.customerPerHoure();
lim.calcCookiesSoldEachHour();
lim.render();
