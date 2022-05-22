"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSlip = void 0;
class PaymentSlip {
    constructor(id, name, email, cpf, amount, type) {
        this.id = id;
        this.name = name;
        this.email = email;
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
    getEmail() {
        return this.email;
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
exports.PaymentSlip = PaymentSlip;
//# sourceMappingURL=paymentSlip.js.map