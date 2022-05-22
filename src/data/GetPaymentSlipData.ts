import { BaseDataBase } from "./BaseDataBase"

export class GetPaymentSlip extends BaseDataBase {
    async GetPaymentSlipById(id:string) {
        try {
            const result = await this.connection()
                .select("idPayment", "amountPayment", "typePayment", "status")
                .from("Payment")
                .where("idPayment", "=", id)
            return result   
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}