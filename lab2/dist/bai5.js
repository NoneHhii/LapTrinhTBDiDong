"use strict";
var simulateTask = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
};
simulateTask(5000)
    .then((statusTask) => console.log(statusTask));
