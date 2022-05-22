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
exports.GetPaymentCard = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class GetPaymentCard extends BaseDataBase_1.BaseDataBase {
    GetPaymentCardById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.connection()
                    .select("idPayment", "amountPayment", "typePayment", "status")
                    .from("PaymentCard")
                    .where("idPayment", "=", id);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.GetPaymentCard = GetPaymentCard;
//# sourceMappingURL=GetPaymentCardData.js.map