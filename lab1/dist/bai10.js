"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(balance, codeAcc) {
        this.balance = balance;
        this.codeAcc = codeAcc;
    }
    getBalance() {
        return this.balance;
    }
    deposit(money) {
        if (money > 0)
            this.balance += money;
    }
    withdraw(money) {
        if (money > 0 && this.balance > money) {
            this.balance -= money;
            return true;
        }
        return false;
    }
}
exports.Account = Account;
