"use strict";
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
];
const process = async () => {
    for await (const promise of promises) {
        console.log(promise);
    }
};
process();
