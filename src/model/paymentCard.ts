export class PaymentCard {
    constructor(
        private id:string,
        private name:string,
        private cpf:number,
        private amount:number,
        private type:string
    ) 
    {}
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getCpf(){
        return this.cpf
    }
    public getAmount(){
        return this.amount
    }
    public getType(){
        return this.type
    }
}
export type inputCardDTO = {
    nameBuyer:string,
    emailBuyer:string,
    cpfBuyer:string,
    typePayment:string,
    cardHolderName:string,
    cardNumber:string,
    cardExpirationDate:string,
    cardCvv:string
}
export type clientInfoCard = {
    id:string,
    nameBuyer:string
}
export type buyerInfoCard = {
    id:string,
    nameBuyer:string,
    emailBuyer:string,
    cpfBuyer:string
}
export type paymentInfoCard = {
    idPayment:string,
    nameBuyer:string,
    emailBuyer:string,
    cpfBuyer:string,
    amountPayment:number,
    typePayment:string,
    cardHolderName:string,
    cardNumber:string,
    cardExpirationDate:string,
    cardCvv:string
    status: string
}
export type infoPayCard = {
    idPayment:string,
    nameBuyer:string,
    cpfBuyer:string,
    status:string,
}