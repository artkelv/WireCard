import { buyerInfo, clientInfo, paymentInfo } from "../model/paymentSlip";
import { BaseDataBase } from "./BaseDataBase";

export class PaymentSlipData extends BaseDataBase {
    
    public async client(input:clientInfo) {
        try {
            const result = await this.connection("Client")
                .insert(input)
                .into("Client")
               
            return true      
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlMessage}
        }
    }
    public async buyer(input:buyerInfo) {
        try {
            await this.connection("Buyer")
                .insert(input)
                .into("Buyer")
            return true      
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlMessage}
        }
    }
    async payment(input:paymentInfo) {
        try {
            await this.connection("Payment")
                .insert(input)
                .into("Payment")
            return true    
        } catch (error:any) {
            return {error:error.message, sqlError:error.sqlError}
        }
    }
    async statusPyamentSlip(){
        try {
            await this.connection()
        } catch (error) {
            
        }
    }
}

/*
const newPaymentSlipData = new PaymentSlipData()
const clientSlipData = newPaymentSlipData.client()
const buyerSlipData = newPaymentSlipData.buyer()
const paymentSlipData = newPaymentSlipData.payment()

*/