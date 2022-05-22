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
exports.PaymentSlipData = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class PaymentSlipData extends BaseDataBase_1.BaseDataBase {
    client(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.connection("Client")
                    .insert(input)
                    .into("Client");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlMessage };
            }
        });
    }
    buyer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection("Buyer")
                    .insert(input)
                    .into("Buyer");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlMessage };
            }
        });
    }
    payment(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection("Payment")
                    .insert(input)
                    .into("Payment");
                return true;
            }
            catch (error) {
                return { error: error.message, sqlError: error.sqlError };
            }
        });
    }
    statusPyamentSlip() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection();
            }
            catch (error) {
            }
        });
    }
}
exports.PaymentSlipData = PaymentSlipData;
//# sourceMappingURL=PaymentSlipData.js.map