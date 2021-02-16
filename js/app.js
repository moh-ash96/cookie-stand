'use strict'
let workingHours = [6 + ' am', 7 + ' am', 8 + ' am', 9 + ' am', 10 + ' am', 11 + ' am', 12 + ' pm', 1 + ' pm', 2 + ' pm', 3 + ' pm', 4 + ' pm', 5 + ' pm', 6 + ' pm', 7 + ' pm'];
let branches = [];

function Branch(name, min, max, avgCookie) {
    this.name = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookie = avgCookie;
    this.customersPerHour = [];
    this.avgCookiePerHour = [];
    this.totalAvgs = 0;
    branches.push(this);
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

let Seattle = new Branch('Seattle', 23, 65, 6.3);
Seattle.random();
Seattle.customersPerHourFun();
Seattle.calcAvgCookiePerHour();

let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
Tokyo.random();
Tokyo.customersPerHourFun();
Tokyo.calcAvgCookiePerHour();

let Dubai = new Branch('Dubai', 11, 38, 3.7);
Dubai.random();
Dubai.customersPerHourFun();
Dubai.calcAvgCookiePerHour();

let Paris = new Branch('Paris', 20, 38, 2.3);
Paris.random();
Paris.customersPerHourFun();
Paris.calcAvgCookiePerHour();

let Lima = new Branch('Lima', 2, 16, 4.6);
Lima.random();
Lima.customersPerHourFun();
Lima.calcAvgCookiePerHour();

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

console.log(branches);

let parent = document.getElementById('container');
let table = document.createElement('table');
parent.appendChild(table);
console.log(parent);
function tableHead() {
    
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
tableHead();

function tableMain() {
    let dataRow1 = document.createElement('tr');
    table.appendChild(dataRow1);
    let rowName1 = document.createElement('td');
    dataRow1.appendChild(rowName1);
    rowName1.textContent= (branches[0].name);
    for(let i=0; i<workingHours.length; i++){
    let rowContent1 = document.createElement('td');
    dataRow1.appendChild(rowContent1);
    rowContent1.textContent= (branches[0].avgCookiePerHour[i]);
    }
    let totalLo1 = document.createElement('td');
        dataRow1.appendChild(totalLo1);
        totalLo1.textContent = branches[0].totalAvgs;
       
        ////////////////////////////////////////////////////

    let dataRow2 = document.createElement('tr');
    table.appendChild(dataRow2);
    let rowName2 = document.createElement('td');
    dataRow2.appendChild(rowName2);
    rowName2.textContent= (branches[1].name);
    for(let i=0; i<workingHours.length; i++){
    let rowContent2 = document.createElement('td');
    dataRow2.appendChild(rowContent2);
    rowContent2.textContent= (branches[1].avgCookiePerHour[i]);
    }
    let totalLo2 = document.createElement('td');
        dataRow2.appendChild(totalLo2);
        totalLo2.textContent = branches[1].totalAvgs;

        ///////////////////////////////////////////////////////

    let dataRow3 = document.createElement('tr');
    table.appendChild(dataRow3);
    let rowName3 = document.createElement('td');
    dataRow3.appendChild(rowName3);
    rowName3.textContent= (branches[2].name);
    for(let i=0; i<workingHours.length; i++){
    let rowContent3 = document.createElement('td');
    dataRow3.appendChild(rowContent3);
    rowContent3.textContent= (branches[2].avgCookiePerHour[i]);
    }
    let totalLo3 = document.createElement('td');
        dataRow3.appendChild(totalLo3);
        totalLo3.textContent = branches[2].totalAvgs;

        ///////////////////////////////////////////////////////////

    let dataRow4 = document.createElement('tr');
    table.appendChild(dataRow4);
    let rowName4 = document.createElement('td');
    dataRow4.appendChild(rowName4);
    rowName4.textContent= (branches[3].name);
    for(let i=0; i<workingHours.length; i++){
    let rowContent4 = document.createElement('td');
    dataRow4.appendChild(rowContent4);
    rowContent4.textContent= (branches[3].avgCookiePerHour[i]);
    }
    let totalLo4 = document.createElement('td');
        dataRow4.appendChild(totalLo4);
        totalLo4.textContent = branches[3].totalAvgs;

        /////////////////////////////////////////////////////


    let dataRow5 = document.createElement('tr');
    table.appendChild(dataRow5);
    let rowName5 = document.createElement('td');
    dataRow5.appendChild(rowName5);
    rowName5.textContent= (branches[4].name);
    for(let i=0; i<workingHours.length; i++){
    let rowContent5 = document.createElement('td');
    dataRow5.appendChild(rowContent5);
    rowContent5.textContent= (branches[4].avgCookiePerHour[i]);
    }
    let totalLo5 = document.createElement('td');
        dataRow5.appendChild(totalLo5);
        totalLo5.textContent = branches[4].totalAvgs;
        }  

tableMain();

function tableFooter() {
    let totalRow = document.createElement('tr');
    table.appendChild(totalRow);
    let totalsName = document.createElement('td')
    totalRow.appendChild(totalsName);
    totalsName.textContent = ('Totals');
    for (let i = 0; i < workingHours.length; i++) {
        let totalsData = document.createElement('td');
        totalRow.appendChild(totalsData);
        totalsData.textContent = (totalCo[i]);
    }
    let totalOTotal = document.createElement('td');
    totalRow.appendChild(totalOTotal);
    totalOTotal.textContent = (totalOfTotal)
    
}
tableFooter();