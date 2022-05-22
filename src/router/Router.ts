import express from "express"
import { PaymentCardController } from "../controller/PaymentCardController"
import { PaymentSlipController } from "../controller/PaymentSlipController"
import { GetPaymentCardController } from "../controller/GetPaymentCardController"
import { GetPaymentSlipController } from "../controller/GetPaymentSlipController"

export const paymentRouter = express.Router()

const paymentSlipController = new PaymentSlipController()
const paymentCardController = new PaymentCardController()
const getPaymentCardController = new GetPaymentCardController()
const getPaymentSlipController = new GetPaymentSlipController()

paymentRouter.post("/slip", paymentSlipController.paymentSlip)
paymentRouter.post("/card", paymentCardController.paymentCard)
paymentRouter.get("/card/:id", getPaymentCardController.getPayment)
paymentRouter.get("/slip/:id", getPaymentSlipController.getPayment)



