'use strict'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let workingHours = [6 + ' am', 7 + ' am', 8 + ' am', 9 + ' am', 10 + ' am', 11 + ' am', 12 + ' pm', 1 + ' pm', 2 + ' pm', 3 + ' pm', 4 + ' pm', 5 + ' pm', 6 + ' pm', 7 + ' pm'];
let Seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookie: 6.3,


    customersPerHour: [],

    for: function () {
        for (let i = 0; i < workingHours.length; i++) {
            
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

            console.log(this.customersPerHour);
        }
    },

    avgCookiePerHour: [],

    secondFor: function () {
        for (let j = 0; j < this.customersPerHour.length; j++) {
            this.avgCookiePerHour.push(this.avgCookie * this.customersPerHour[j]);
            console.log(this.avgCookiePerHour.floor);

        }
    }

}

Seattle.for();
Seattle.secondFor();

let avgCookiePerHourSum = function (arr) {
    return Seattle.avgCookiePerHour.reduce(function (a, b) {
        return a + b

    }, 0);

}
console.log(avgCookiePerHourSum());

let parent = document.getElementById("parent");
let heading1 = document.createElement('h3');
parent.appendChild(heading1);
heading1.textContent = 'Seattel'
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);
for (let i = 0; i < workingHours.length; i++) {
    let listItems = document.createElement('li');
    unorderedList.appendChild(listItems);
    listItems.textContent = `${workingHours[i]} : ${Seattle.avgCookiePerHour[i]} cookies`

}
let listItems = document.createElement('li');
unorderedList.appendChild(listItems);
listItems.textContent = `Total: ${avgCookiePerHourSum()} cookies. `



let Tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookie: 1.2,


    customersPerHour: [],

    for: function () {
        for (let i = 0; i < workingHours.length; i++) {
            
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

            console.log(this.customersPerHour);
        }
    },

    avgCookiePerHour: [],

    secondFor: function () {
        for (let j = 0; j < this.customersPerHour.length; j++) {
            this.avgCookiePerHour.push(this.avgCookie * this.customersPerHour[j]);
            console.log(this.avgCookiePerHour.floor);

        }
    }

}

Tokyo.for();
Tokyo.secondFor();

let avgCookiePerHourSum2 = function (arr) {
    return Tokyo.avgCookiePerHour.reduce(function (a, b) {
        return a + b

    }, 0);

}

let heading2 = document.createElement('h3');
parent.appendChild(heading2);
heading2.textContent = 'Tokyo'

let unorderedList2 = document.createElement('ul');
parent.appendChild(unorderedList2);
for (let i = 0; i < workingHours.length; i++) {
    let listItems2 = document.createElement('li');
    unorderedList2.appendChild(listItems2);
    listItems2.textContent = `${workingHours[i]} : ${Tokyo.avgCookiePerHour[i]} cookies`

}
let listItems2 = document.createElement('li');
unorderedList2.appendChild(listItems2);
listItems2.textContent = `Total: ${avgCookiePerHourSum2()} cookies. `



let Dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookie: 3.7,


    customersPerHour: [],

    for: function () {
        for (let i = 0; i < workingHours.length; i++) {
            
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

            console.log(this.customersPerHour);
        }
    },

    avgCookiePerHour: [],

    secondFor: function () {
        for (let j = 0; j < this.customersPerHour.length; j++) {
            this.avgCookiePerHour.push(this.avgCookie * this.customersPerHour[j]);
            console.log(this.avgCookiePerHour.floor);

        }
    }

}

Dubai.for();
Dubai.secondFor();

let avgCookiePerHourSum3 = function (arr) {
    return Dubai.avgCookiePerHour.reduce(function (a, b) {
        return a + b

    }, 0);

}

let heading3 = document.createElement('h3');
parent.appendChild(heading3);
heading3.textContent = 'Dubai'

let unorderedList3 = document.createElement('ul');
parent.appendChild(unorderedList3);
for (let i = 0; i < workingHours.length; i++) {
    let listItems3 = document.createElement('li');
    unorderedList3.appendChild(listItems3);
    listItems3.textContent = `${workingHours[i]} : ${Tokyo.avgCookiePerHour[i]} cookies`

}
let listItems3 = document.createElement('li');
unorderedList3.appendChild(listItems3);
listItems3.textContent = `Total: ${avgCookiePerHourSum3()} cookies. `



let Paris = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookie: 2.3,


    customersPerHour: [],

    for: function () {
        for (let i = 0; i < workingHours.length; i++) {
           
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

            console.log(this.customersPerHour);
        }
    },

    avgCookiePerHour: [],

    secondFor: function () {
        for (let j = 0; j < this.customersPerHour.length; j++) {
            this.avgCookiePerHour.push(this.avgCookie * this.customersPerHour[j]);
            console.log(this.avgCookiePerHour.floor);

        }
    }

}

Paris.for();
Paris.secondFor();

let avgCookiePerHourSum4 = function (arr) {
    return Paris.avgCookiePerHour.reduce(function (a, b) {
        return a + b

    }, 0);

}


let heading4 = document.createElement('h3');
parent.appendChild(heading4);
heading4.textContent = 'Paris'

let unorderedList4 = document.createElement('ul');
parent.appendChild(unorderedList4);
for (let i = 0; i < workingHours.length; i++) {
    let listItems4 = document.createElement('li');
    unorderedList4.appendChild(listItems4);
    listItems4.textContent = `${workingHours[i]} : ${Tokyo.avgCookiePerHour[i]} cookies`

}
let listItems4 = document.createElement('li');
unorderedList4.appendChild(listItems4);
listItems4.textContent = `Total: ${avgCookiePerHourSum4()} cookies. `




let Lima = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookie: 4.6,


    customersPerHour: [],

    for: function () {
        for (let i = 0; i < workingHours.length; i++) {
           
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

            console.log(this.customersPerHour);
        }
    },

    avgCookiePerHour: [],

    secondFor: function () {
        for (let j = 0; j < this.customersPerHour.length; j++) {
            this.avgCookiePerHour.push(this.avgCookie * this.customersPerHour[j]);
            console.log(this.avgCookiePerHour.floor);

        }
    }

}

Lima.for();
Lima.secondFor();


let avgCookiePerHourSum5 = function (arr) {
    return Lima.avgCookiePerHour.reduce(function (a, b) {
        return a + b

    }, 0);

}

let heading5 = document.createElement('h3');
parent.appendChild(heading5);
heading5.textContent = 'Lima'

let unorderedList5 = document.createElement('ul');
parent.appendChild(unorderedList5);
for (let i = 0; i < workingHours.length; i++) {
    let listItems5 = document.createElement('li');
    unorderedList5.appendChild(listItems5);
    listItems5.textContent = `${workingHours[i]} : ${Tokyo.avgCookiePerHour[i]} cookies`

}
let listItems5 = document.createElement('li');
unorderedList5.appendChild(listItems5);
listItems5.textContent = `Total: ${avgCookiePerHourSum5()} cookies. `


