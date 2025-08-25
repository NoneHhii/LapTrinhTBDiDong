export interface Payment {

    pay(amount: number) : void;
}

export class CashPayment implements Payment{
    pay(amount: number): void {
        console.log(`Thanh toan ${amount}$ bang tien mat`);
        
    }

}

export class CardPayment implements Payment{
    pay(amount: number): void {
        console.log(`Thanh toan ${amount}$ the`);
        
    }

}