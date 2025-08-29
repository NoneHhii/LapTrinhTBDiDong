"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// "https://jsonplaceholder.typicode.com/todos"
async function fetchWithRetry(url, retries) {
    try {
        const res = await axios_1.default.get(url);
        return res.data;
    }
    catch (error) {
        if (retries <= 0) {
            console.log("All retries fail: " + error);
            return null;
        }
        ;
        console.log(`request fail. retries...(${retries} time)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return fetchWithRetry(url, retries - 1);
    }
}
(async () => {
    fetchWithRetry("https://jsonplaceholder.typicode.com/todo", 2);
})();
