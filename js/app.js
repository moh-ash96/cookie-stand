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

let Tokyo = new Branch('Tokyo', 3, 24, 1.2);

let Dubai = new Branch('Dubai', 11, 38, 3.7);

let Paris = new Branch('Paris', 20, 38, 2.3);

let Lima = new Branch('Lima', 2, 16, 4.6);





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


Branch.prototype.render= function() {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    
    let rowName = document.createElement('td');
    dataRow.appendChild(rowName);
    rowName.textContent = (this.name);
    
    for (let i=0; i<workingHours.length; i++){
        let tdcontent = document.createElement('td');
        tdcontent.textContent = this.avgCookiePerHour[i]
        dataRow.appendChild(tdcontent);
    }
    let totalDataEach = document.createElement('td');
    dataRow.appendChild(totalDataEach);
    totalDataEach.textContent = (this.totalAvgs);
}

/// calling functions

for( let i =0; i< branches.length; i++){
    branches[i].customersPerHourFun();
    branches[i].calcAvgCookiePerHour();
    branches[i].render();
}



 let tableFooter = function () {
    let totalRow = document.createElement('tr');
    table.appendChild(totalRow);

    let totalsName = document.createElement('th')
    totalRow.appendChild(totalsName);
    totalsName.textContent = ('Totals');

    let totalOfTotal=0;

    for (let i = 0; i < workingHours.length; i++) {
        let totalEachHour=0;

        for (let j =0; j< branches.length; j++){
            totalEachHour += branches[j].avgCookiePerHour[i];
            totalOfTotal += branches[j].avgCookiePerHour[i];
        }

        let totalsData = document.createElement('th');
        totalRow.appendChild(totalsData);
        totalsData.textContent = totalEachHour;
    }

    let totalOTotal = document.createElement('th');
    totalRow.appendChild(totalOTotal);
    totalOTotal.textContent = (totalOfTotal)
    
}
tableFooter();