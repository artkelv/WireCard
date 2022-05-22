"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const PaymentCardController_1 = require("../controller/PaymentCardController");
const PaymentSlipController_1 = require("../controller/PaymentSlipController");
const GetPaymentCardController_1 = require("../controller/GetPaymentCardController");
const GetPaymentSlipController_1 = require("../controller/GetPaymentSlipController");
exports.paymentRouter = express_1.default.Router();
const paymentSlipController = new PaymentSlipController_1.PaymentSlipController();
const paymentCardController = new PaymentCardController_1.PaymentCardController();
const getPaymentCardController = new GetPaymentCardController_1.GetPaymentCardController();
const getPaymentSlipController = new GetPaymentSlipController_1.GetPaymentSlipController();
exports.paymentRouter.post("/slip", paymentSlipController.paymentSlip);
exports.paymentRouter.post("/card", paymentCardController.paymentCard);
exports.paymentRouter.get("/card/:id", getPaymentCardController.getPayment);
exports.paymentRouter.get("/slip/:id", getPaymentSlipController.getPayment);
//# sourceMappingURL=Router.js.map