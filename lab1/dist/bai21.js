"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.values = [];
    }
    add(value) {
        this.values.push(value);
    }
    getAll() {
        return this.values;
    }
}
exports.Repository = Repository;
