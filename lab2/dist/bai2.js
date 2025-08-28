"use strict";
const promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    });
};
promise1().then((number) => console.log(number));
