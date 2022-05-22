import {Request, Response} from "express"
import { GetPaymentSlipBusiness } from "../business/GetPaymentSlipBusiness"

export class GetPaymentSlipController {
    async getPayment(
        req:Request,
        res:Response
    ){
        try {
            const id = req.params.id
            const getPaymentSlipBusiness = new GetPaymentSlipBusiness()
            const getPayment = await getPaymentSlipBusiness.getPayment(id)

            res.status(200).send(getPayment)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}