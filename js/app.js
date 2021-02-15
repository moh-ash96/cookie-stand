'use strict'
let workingHours = [6 + ' am', 7 + ' am', 8 + ' am', 9 + ' am', 10 + ' am', 11 + ' am', 12 + ' pm', 1 + ' pm', 2 + ' pm', 3 + ' pm', 4 + ' pm', 5 + ' pm', 6 + ' pm', 7 + ' pm'];

function Branch(name, min, max, avgCookie) {
    this.name = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookie = avgCookie;
    this.customersPerHour = [];
    this.avgCookiePerHour = [];
    this.totalAvgs = 0;
}

Branch.prototype.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Branch.prototype.customersPerHourFun = function () {
    for (let i = 0; i < workingHours.length; i++) {
        this.customersPerHour.push(this.random(this.minCustomers, this.maxCustomers));
    }
}
Branch.prototype.calcAvgCookiePerHour = function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
        this.avgCookiePerHour.push(Math.floor(this.avgCookie * this.customersPerHour[i]));
        this.totalAvgs += this.avgCookiePerHour[i];
    }
}
Branch.prototype.header = function () {
    let table = document.getElementById('table');
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let headingDatain = document.createElement('th');
    headingRow.appendChild(headingDatain);
    headingDatain.textContent = 'Working hours/Locations';
    for (let i = 0; i < workingHours.length; i++) {
        let headingData = document.createElement('th');
        headingRow.appendChild(headingData);
        headingData.textContent = workingHours[i];
    }
    let headingDatafi = document.createElement('th');
    headingRow.appendChild(headingDatafi);
    headingDatafi.textContent = ('Daily Location Total');
}
Branch.prototype.render = function () {
    let table = document.getElementById('table');
    let tableData = document.createElement('tr');
    table.appendChild(tableData);
    let location = document.createElement('td');
    tableData.appendChild(location);
    location.textContent = (this.name);
    for (let i = 0; i < workingHours.length; i++) {
        let cookies = document.createElement('td');
        tableData.appendChild(cookies);
        cookies.textContent = (this.avgCookiePerHour[i]);
    }
    let totalLo = document.createElement('td');
    tableData.appendChild(totalLo);
    totalLo.textContent = this.totalAvgs;
}
Branch.prototype.footer = function () {
    let footer = document.getElementById('table');
    let totalCoName = document.createElement('td');
    footer.appendChild(totalCoName);
    totalCoName.textContent = ('Totals');
    for (let i = 0; i < workingHours.length; i++) {
        let totalCos = document.createElement('td');
        footer.appendChild(totalCos);
        totalCos.textContent = (totalCo[i])
    }
    let totalOTotal = document.createElement('td');
    footer.appendChild(totalOTotal);
    totalOTotal.textContent = (totalOfTotal);
}

let Seattle = new Branch('Seattle', 23, 65, 6.3);
Seattle.random();
Seattle.customersPerHourFun();
Seattle.calcAvgCookiePerHour();
Seattle.header();
Seattle.render();
// console.log(Seattle);

let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
Tokyo.random();
Tokyo.customersPerHourFun();
Tokyo.calcAvgCookiePerHour();
Tokyo.render();
// console.log(Tokyo);

let Dubai = new Branch('Dubai', 11, 38, 3.7);
Dubai.random();
Dubai.customersPerHourFun();
Dubai.calcAvgCookiePerHour();
Dubai.render();
// console.log(Dubai);

let Paris = new Branch('Paris', 20, 38, 2.3);
Paris.random();
Paris.customersPerHourFun();
Paris.calcAvgCookiePerHour();
Paris.render();
// console.log(Paris);

let Lima = new Branch('Lima', 2, 16, 4.6);
Lima.random();
Lima.customersPerHourFun();
Lima.calcAvgCookiePerHour();
Lima.render();
// console.log(Lima);

let totalCo = [];
function totalCoo() {
    for (let i = 0; i < workingHours.length; i++) {
        totalCo.push(Seattle.avgCookiePerHour[i] + Tokyo.avgCookiePerHour[i] + Dubai.avgCookiePerHour[i] + Paris.avgCookiePerHour[i] + Lima.avgCookiePerHour[i]);
    }
}
totalCoo();
let totalOfTotal = 0;
function totalTotal() {
    for (let i = 0; i < workingHours.length; i++) {
        totalOfTotal += totalCo[i];
    }
}
totalTotal();
// console.log(totalOfTotal);
Seattle.footer();

