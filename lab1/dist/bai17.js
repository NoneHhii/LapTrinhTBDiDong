"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    // phương thức log
    log(message) {
        console.log(`[LOG] ${message}`);
    }
    error(message) {
        console.error(`[ERROR] ${message}`);
    }
    warn(message) {
        console.warn(`[WARN] ${message}`);
    }
}
exports.Logger = Logger;
