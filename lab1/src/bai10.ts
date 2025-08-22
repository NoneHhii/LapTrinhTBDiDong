export class Account {
    private balance : number;
    readonly codeAcc : number;

    constructor(balance: number, codeAcc: number) {
        this.balance = balance;
        this.codeAcc = codeAcc;
    }

    public getBalance() : number {
        return this.balance;
    }

    public deposit(money: number) : void {
        if(money > 0) this.balance += money;
    }

    public withdraw(money: number) : boolean {
        if(money > 0 && this.balance > money) {
            this.balance -= money;
            return true;
        } 
        return false;
    }
}