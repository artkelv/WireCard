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
exports.PaymentCardController = void 0;
const PaymentCardBusiness_1 = require("../business/PaymentCardBusiness");
class PaymentCardController {
    paymentCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    nameBuyer: req.body.nameBuyer,
                    emailBuyer: req.body.emailBuyer,
                    cpfBuyer: req.body.cpfBuyer,
                    typePayment: req.body.typePayment,
                    cardHolderName: req.body.cardHolderName,
                    cardNumber: req.body.cardNumber,
                    cardExpirationDate: req.body.cardExpirationDate,
                    cardCvv: req.body.cardCvv
                };
                const paymentCardBusiness = new PaymentCardBusiness_1.PaymentCardBusiness();
                const result = yield paymentCardBusiness.paymentCard(input);
                res.status(201).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.messsage });
            }
        });
    }
}
exports.PaymentCardController = PaymentCardController;
//# sourceMappingURL=PaymentCardController.js.map