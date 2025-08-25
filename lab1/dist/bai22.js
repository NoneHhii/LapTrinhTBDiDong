"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.values = [];
    }
    push(value) {
        this.values.push(value);
        return this.values.length;
    }
    pop() {
        return this.values.pop();
    }
    peek() {
        return this.values[this.values.length - 1];
    }
    isEmpty() {
        return this.values.length === 0;
    }
    size() {
        return this.values.length;
    }
}
exports.Stack = Stack;
