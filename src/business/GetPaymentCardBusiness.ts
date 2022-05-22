import { GetPaymentCard } from "../data/GetPaymentCardData";

export class GetPaymentCardBusiness {
    async getPayment(id:string) {
    try {
    if (!id) {
        return("O campo 'id' não foi passado ou está incorreto. Apenas ID's válidos.");
    }
    const getPaymentCard = new GetPaymentCard()
    const getPayment = await getPaymentCard.GetPaymentCardById(id)

    if(getPayment.length <= 0){
        throw new Error("O id que foi passado não consta no nosso sistema de pagamentos.");
    }
        return getPayment
    } catch (error:any) {
        throw new Error(error.message)
    }
  }
}
