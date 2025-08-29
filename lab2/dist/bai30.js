"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function fetchsUser(url) {
    return axios_1.default.get(url).then(res => res.data);
}
async function fetchTest() {
    const fetchs = [
        fetchsUser("https://jsonplaceholder.typicode.com/todos/1"),
        fetchsUser("https://jsonplaceholder.typicode.com/todos/invalid"),
        fetchsUser("https://jsonplaceholder.typicode.com/todos/2"),
    ];
    const result = await Promise.allSettled(fetchs);
    result.forEach((res, idx) => {
        if (res.status === "fulfilled")
            console.log(`API ${idx}: `, res.value);
        else
            console.log(`API ${idx} is failure ${res.reason.message}`);
    });
}
fetchTest();
