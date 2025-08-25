"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = exports.CashPayment = void 0;
class CashPayment {
    pay(amount) {
        console.log(`Thanh toan ${amount}$ bang tien mat`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) {
        console.log(`Thanh toan ${amount}$ the`);
    }
}
exports.CardPayment = CardPayment;
