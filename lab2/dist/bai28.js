"use strict";
async function Task(id, time) {
    return await new Promise(resolve => setTimeout(() => resolve(`Task ${id} done with ${time}s`), time));
}
async function processTask() {
    var Tasks = [
        Task(1, 3000),
        Task(2, 1000),
        Task(3, 2000),
    ];
    const result = await Promise.all(Tasks);
    console.log(result);
}
processTask();
