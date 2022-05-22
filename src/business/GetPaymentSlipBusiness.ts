import { GetPaymentSlip } from "../data/GetPaymentSlipData";
import { CustomError } from "../errors/customError";

export class GetPaymentSlipBusiness {
    async getPayment(id:string) {
    try {
    if (!id) {
        return "O campo 'id' não foi passado ou está incorreto. Apenas ID's válidos."
    }
    const getPaymentSlip = new GetPaymentSlip()
    const getPayment = await getPaymentSlip.GetPaymentSlipById(id)

    if(getPayment.length <= 0){
        throw new Error("O id que foi passado não consta no nosso sistema de pagamentos.");
    }
        return getPayment
    } catch (error:any) {
        throw new Error(error.message)
    }
  }
}
