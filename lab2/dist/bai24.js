"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function postData(data) {
    try {
        const res = await axios_1.default.post("https://jsonplaceholder.typicode.com/todos", data);
        console.log(res.data);
    }
    catch (error) {
        console.log(error);
    }
}
(async () => {
    await postData({
        userId: 1,
        title: "Push up 1000 times",
        completed: false,
    });
})();
