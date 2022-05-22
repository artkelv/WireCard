import {Request, Response} from "express"
import { GetPaymentCardBusiness } from "../business/GetPaymentCardBusiness"

export class GetPaymentCardController {
    async getPayment(
        req:Request,
        res:Response
    ){
        try {
            const id = req.params.id
            const getPaymentCardBusiness = new GetPaymentCardBusiness()
            const getPayment = await getPaymentCardBusiness.getPayment(id)

            res.status(200).send(getPayment)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}