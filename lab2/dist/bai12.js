"use strict";
var simulateTask = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
};
var task = async () => {
    const data = await simulateTask(2000);
    console.log(data);
};
task();
