import {Request, Response} from "express"
import { PaymentCardBusiness } from "../business/PaymentCardBusiness"
import { inputCardDTO } from "../model/paymentCard"

export class PaymentCardController {
    async paymentCard(
        req:Request,
        res:Response
    ) {
        try {
            const input:inputCardDTO = { 
                nameBuyer:req.body.nameBuyer,
                emailBuyer:req.body.emailBuyer, 
                cpfBuyer:req.body.cpfBuyer,
                typePayment:req.body.typePayment, 
                cardHolderName:req.body.cardHolderName, 
                cardNumber:req.body.cardNumber, 
                cardExpirationDate:req.body.cardExpirationDate, 
                cardCvv:req.body.cardCvv
            } 
            
            const paymentCardBusiness = new PaymentCardBusiness()
            const result = await paymentCardBusiness.paymentCard(input)

            res.status(201).send(result)
        } catch (error:any) {
            res.status(400).send({error:error.messsage})
        }   
    }
}