"use strict";
const arr = [1, 34, 2, 6, 12, 7, 21, 11, 32];
var arrPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr.filter((a) => a % 2 == 0));
    }, 1000);
});
arrPromise
    .then((arr) => console.log(arr));
