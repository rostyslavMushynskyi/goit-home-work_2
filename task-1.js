"use strict";

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    let numberElement = i + 1;
    console.log(`${numberElement} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
