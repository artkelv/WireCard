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
exports.PaymentCardData = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class PaymentCardData extends BaseDataBase_1.BaseDataBase {
    InsertClientCard(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection()
                    .insert(input)
                    .into("ClientCard");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlMessage };
            }
        });
    }
    InsertBuyerCard(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection()
                    .insert(input)
                    .into("BuyerCard");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlMessage };
            }
        });
    }
    InsertPaymentCard(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection()
                    .insert(input)
                    .into("PaymentCard");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlMessage };
            }
        });
    }
}
exports.PaymentCardData = PaymentCardData;
//# sourceMappingURL=PaymentCardData.js.map