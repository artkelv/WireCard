"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCard = void 0;
class PaymentCard {
    constructor(id, name, cpf, amount, type) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.amount = amount;
        this.type = type;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getAmount() {
        return this.amount;
    }
    getType() {
        return this.type;
    }
}
exports.PaymentCard = PaymentCard;
//# sourceMappingURL=paymentCard.js.map