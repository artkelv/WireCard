import { PaymentCardData } from "../data/PaymentCardData";
import { buyerInfoCard, clientInfoCard, infoPayCard, inputCardDTO, paymentInfoCard } from "../model/paymentCard";
import { GenerateID } from "../services/GenerateID";
import { Validations } from "../services/Validations";

export class PaymentCardBusiness {
    async paymentCard(input:inputCardDTO) {
        try {
            const {
                nameBuyer, emailBuyer, 
                cpfBuyer,
                typePayment, cardHolderName, 
                cardNumber, cardExpirationDate,  
                cardCvv
            } = input
    
            const validations = new Validations()

            const nameBuyerValidate = validations.nameBuyerValidate(nameBuyer)
            if(!nameBuyerValidate){
                throw new Error("O campo 'nome do comprador' não foi preenchido da forma correta. Exemplo: Lucas Fernandes");
            }
            const emailBuyerValidate = validations.emailBuyerValidate(emailBuyer)
            if(!emailBuyerValidate){
                throw new Error("O campo de 'email do comprador' não foi preenchido da forma correta. Exemplo: name@gmail.com");
            }
            const cpfBuyerValidate = validations.cpfBuyerValidate(cpfBuyer)
            if(!cpfBuyerValidate){
                throw new Error("O campo de 'cpf' não foi preenchido da forma correta. Exemplo: 999.999.999-99");
            }
            const typePaymentValidateCard = validations.typePaymentValidateCard(typePayment)
            if(!typePaymentValidateCard){
                throw new Error("O campo de 'tipo de pagamento' não foi preenchido da forma correta. Exemplo: 'Credit Card' ou 'credit card'"); 
            }
            const holderNameCardValidate = validations.holderNameValidate(cardHolderName)
            if(!holderNameCardValidate){
                throw new Error("O campo de 'nome do titular' não foi preenchido corretamente. Exemplo: 'Josias Maciel' ");
            }
            const numberCardValidate = validations.numberCardValidate(cardNumber)
            if(!numberCardValidate){
                throw new Error("O campo de 'numero do cartão' não foi preenchido corretamente. Aceitamos apenas 'American express', 'Visa', 'MasterCard', 'Discovery', 'Diners Club' e 'JCB'. Os formatos aceitos estão na documentação da API");
            }
            const expirationDateCardValidate = validations.expirationDateValidate(cardExpirationDate)
            if(!expirationDateCardValidate){
                throw new Error("A data de vencimento do cartão encontra-se foram do prazo de validade");
            }
            const cvvCardValidate = validations.cvvValidate(cardCvv.toString())
            if(!cvvCardValidate){
                throw new Error("O numero de cvv do cartão não corresponde a um numero correto ou aceitavél");
            }

            let amountExampleOne = Math.floor(Math.random() * 500)
            let amountExampleTwo = Math.floor(Math.random() * 1700)
            let amountFinished:number 
            
            const id = new GenerateID().newId()

            if(nameBuyer.length <= 8){
                amountFinished = amountExampleOne
            }else{
                amountFinished = amountExampleTwo
            }
            
            const clientCard:clientInfoCard = {
                id,
                nameBuyer
            }
            const buyerCard:buyerInfoCard = {
                id,
                nameBuyer,
                emailBuyer,
                cpfBuyer
            }
            const paymentCard:paymentInfoCard = {
                idPayment:id,
                nameBuyer,
                emailBuyer,
                cpfBuyer,
                amountPayment:amountFinished,
                typePayment,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCvv,
                status: "accepted"
            }

            const paymentCardData = new PaymentCardData()

            const insertClientCard = paymentCardData.InsertClientCard(clientCard)
            if(!insertClientCard){
                throw new Error("Não foi possível cadastrar o cliente");
            }
            const insertBuyerCard = paymentCardData.InsertBuyerCard(buyerCard)
            if(!insertBuyerCard){
                throw new Error("Não foi possivel cadastrar o comprador/pagador");
            }
            const insertPaymentCard = paymentCardData.InsertPaymentCard(paymentCard)
            if(!insertPaymentCard){
                throw new Error("Não foi possível efetuar o pagamento desta conta");
            }
            
            const infoPaymentCard:infoPayCard = {
                idPayment:paymentCard.idPayment,
                nameBuyer:paymentCard.nameBuyer,
                cpfBuyer:paymentCard.cpfBuyer,
                status:"accepted",
            }

            return infoPaymentCard
        } catch (error:any) {
            return(error.message);
        }
    }
}