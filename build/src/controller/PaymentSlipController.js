"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSlipController = void 0;
const PaymentSlipBusiness_1 = require("../business/PaymentSlipBusiness");
class PaymentSlipController {
    paymentSlip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    nameBuyer: req.body.nameBuyer,
                    emailBuyer: req.body.email,
                    cpfBuyer: req.body.cpfBuyer,
                    typePayment: req.body.typePayment
                } = req.body;
                const paymentSlip = new PaymentSlipBusiness_1.PaymentSlipBusiness();
                const result = yield paymentSlip.paymentSlip(input);
                res.status(201).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.messsage });
            }
        });
    }
}
exports.PaymentSlipController = PaymentSlipController;
//# sourceMappingURL=PaymentSlipController.js.map