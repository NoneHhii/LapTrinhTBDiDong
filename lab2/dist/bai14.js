"use strict";
var numberAsc = async (num) => {
    const result = await new Promise(resolve => setTimeout(() => resolve(num * 3), 1000));
    console.log(result);
};
numberAsc(4);
