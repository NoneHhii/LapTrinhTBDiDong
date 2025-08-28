"use strict";
var randomPm = new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10);
    if (number == 0)
        reject(number);
    else
        resolve(number);
});
randomPm
    .then((number) => console.log("resolve: " + number))
    .catch((code) => console.log("reject: " + code));
