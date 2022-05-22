import { CustomError } from "../errors/customError";
import { buyerInfoCard, clientInfoCard, paymentInfoCard } from "../model/paymentCard";
import { BaseDataBase } from "./BaseDataBase";

export class PaymentCardData extends BaseDataBase  {
    async InsertClientCard(input:clientInfoCard) {
        try {
            await this.connection()
                .insert(input)
                .into("ClientCard")
            return true    
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlMessage}
        }
    }
    async InsertBuyerCard(input:buyerInfoCard) {
        try {
            await this.connection()
                .insert(input)
                .into("BuyerCard")
            return true    
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlMessage}
        }
    }
    async InsertPaymentCard(input:paymentInfoCard) {
        try {
            await this.connection()
                .insert(input)
                .into("PaymentCard")
            return true    
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlMessage}
        }
    }
    
}