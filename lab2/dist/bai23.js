"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function fetchTodo() {
    const res = await axios_1.default.get("https://jsonplaceholder.typicode.com/todos");
    const taskDone = res.data.filter(task => task.completed);
    return taskDone.slice(0, 5);
}
(async () => {
    const complete = await fetchTodo();
    console.log(complete);
})();
