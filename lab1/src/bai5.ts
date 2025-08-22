export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(money: number) {
        this.balance = this.balance + money;
    }

    withdraw(money: number) {
        this.balance -= money;
    }
}