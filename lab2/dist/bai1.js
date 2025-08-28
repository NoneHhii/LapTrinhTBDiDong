"use strict";
var promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
promise.then((data) => console.log(data));
