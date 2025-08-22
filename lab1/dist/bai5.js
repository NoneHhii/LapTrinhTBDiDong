"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        this.balance = this.balance + money;
    }
    withdraw(money) {
        this.balance -= money;
    }
}
exports.BankAccount = BankAccount;
