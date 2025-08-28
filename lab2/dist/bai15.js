"use strict";
var task1 = async () => {
    return new Promise(resolve => setTimeout(() => resolve("task start..."), 2000));
};
var task2 = async (time) => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
};
var word = async (num) => {
    const rs1 = await task1();
    console.log(rs1);
    const rs2 = await task2(num);
    console.log(rs2);
};
word(1000);
