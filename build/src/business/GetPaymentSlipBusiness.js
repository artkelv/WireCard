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
exports.GetPaymentSlipBusiness = void 0;
const GetPaymentSlipData_1 = require("../data/GetPaymentSlipData");
class GetPaymentSlipBusiness {
    getPayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    return "O campo 'id' não foi passado ou está incorreto. Apenas ID's válidos.";
                }
                const getPaymentSlip = new GetPaymentSlipData_1.GetPaymentSlip();
                const getPayment = yield getPaymentSlip.GetPaymentSlipById(id);
                if (getPayment.length <= 0) {
                    throw new Error("O id que foi passado não consta no nosso sistema de pagamentos.");
                }
                return getPayment;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.GetPaymentSlipBusiness = GetPaymentSlipBusiness;
//# sourceMappingURL=GetPaymentSlipBusiness.js.map