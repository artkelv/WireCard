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
exports.PaymentSlipBusiness = void 0;
const customError_1 = require("../errors/customError");
const PaymentSlipData_1 = require("../data/PaymentSlipData");
const GenerateID_1 = require("../services/GenerateID");
const Validations_1 = require("../services/Validations");
class PaymentSlipBusiness {
    paymentSlip(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let errorCode = 500;
            try {
                const { nameBuyer, emailBuyer, cpfBuyer, typePayment } = input;
                const id = new GenerateID_1.GenerateID().newId();
                const validations = new Validations_1.Validations();
                const nameBuyerValidation = validations.nameBuyerValidate(nameBuyer);
                if (nameBuyerValidation !== true) {
                    throw new customError_1.CustomError(400, "O campo 'nome do comprador' não foi preenchido da forma correta. Exemplo: Lucas Fernandes");
                }
                const emailBuyerValidation = validations.emailBuyerValidate(emailBuyer);
                if (emailBuyerValidation !== true) {
                    throw new customError_1.CustomError(400, "O campo de 'email do comprador' não foi preenchido da forma correta. Exemplo: name@gmail.com");
                }
                const cpfBuyerValidation = validations.cpfBuyerValidate(cpfBuyer);
                if (cpfBuyerValidation !== true) {
                    throw new customError_1.CustomError(400, "O campo de 'cpf' não foi preenchido da forma correta. Exemplo: 999.999.999-99");
                }
                const typePaymentValidation = validations.typePaymentValidateSlip(typePayment);
                if (typePaymentValidation !== true) {
                    throw new customError_1.CustomError(400, "O campo de 'tipo de pagamento' não foi preenchido da forma correta. Exemplo: 'Slip' ou 'slip'");
                }
                const numberSlip = Math.floor(Math.random() * 12536987452147859685);
                let amountExampleOne = Math.floor(Math.random() * 500);
                let amountExampleTwo = Math.floor(Math.random() * 1700);
                let amountFinished;
                if (nameBuyer.length <= 8) {
                    amountFinished = amountExampleOne;
                }
                else {
                    amountFinished = amountExampleTwo;
                }
                const client = {
                    id
                };
                const buyer = {
                    id,
                    nameBuyer,
                    emailBuyer,
                    cpfBuyer
                };
                const payment = {
                    idPayment: id,
                    nameBuyer,
                    emailBuyer,
                    cpfBuyer,
                    amountPayment: amountFinished,
                    typePayment,
                    numberSlip: numberSlip.toString(),
                    status: "accepted"
                };
                const newPaymentSlipData = new PaymentSlipData_1.PaymentSlipData();
                const clientSlipData = yield newPaymentSlipData.client(client);
                if (!clientSlipData) {
                    throw new Error("Não foi possível cadastrar o cliente.");
                }
                const buyerSlipData = yield newPaymentSlipData.buyer(buyer);
                if (!buyerSlipData) {
                    throw new Error("Não foi possível cadastrar o comprador.");
                }
                const paymentSlipData = yield newPaymentSlipData.payment(payment);
                if (!paymentSlipData) {
                    throw new Error("Não possível processar este pagamento");
                }
                const dataPayment = {
                    status: "aceppted",
                    slip: payment.numberSlip.toString()
                };
                return dataPayment;
            }
            catch (error) {
                throw new customError_1.CustomError(errorCode, error.message);
            }
        });
    }
}
exports.PaymentSlipBusiness = PaymentSlipBusiness;
//# sourceMappingURL=PaymentSlipBusiness.js.map