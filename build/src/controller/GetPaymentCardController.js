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
exports.GetPaymentCardController = void 0;
const GetPaymentCardBusiness_1 = require("../business/GetPaymentCardBusiness");
class GetPaymentCardController {
    getPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const getPaymentCardBusiness = new GetPaymentCardBusiness_1.GetPaymentCardBusiness();
                const getPayment = yield getPaymentCardBusiness.getPayment(id);
                res.status(200).send(getPayment);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.GetPaymentCardController = GetPaymentCardController;
//# sourceMappingURL=GetPaymentCardController.js.map