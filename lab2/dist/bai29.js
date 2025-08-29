"use strict";
async function Task2(id, time) {
    return await new Promise(resolve => setTimeout(() => resolve(`Task ${id} done with ${time}s`), time));
}
async function queueTask() {
    var TaskQueue = [
        Task2(1, 3000),
        Task2(2, 1000),
        Task2(3, 2000),
    ];
    for (const task of TaskQueue) {
        var result = await task;
        console.log(result);
    }
}
queueTask();
