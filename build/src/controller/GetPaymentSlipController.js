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
exports.GetPaymentSlipController = void 0;
const GetPaymentSlipBusiness_1 = require("../business/GetPaymentSlipBusiness");
class GetPaymentSlipController {
    getPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const getPaymentSlipBusiness = new GetPaymentSlipBusiness_1.GetPaymentSlipBusiness();
                const getPayment = yield getPaymentSlipBusiness.getPayment(id);
                res.status(200).send(getPayment);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.GetPaymentSlipController = GetPaymentSlipController;
//# sourceMappingURL=GetPaymentSlipController.js.map