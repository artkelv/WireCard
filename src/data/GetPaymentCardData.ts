import { CustomError } from "../errors/customError"
import { BaseDataBase } from "./BaseDataBase"

export class GetPaymentCard extends BaseDataBase {
    async GetPaymentCardById(id:string) {
        try {
            const result = await this.connection()
                .select("idPayment", "amountPayment", "typePayment", "status")
                .from("PaymentCard")
                .where("idPayment", "=", id)
            return result   
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}