export class Validations {
    public nameBuyerValidate(name:string):boolean{
        const validateNameOfNumber = /[0-9]/

        if(name.match(validateNameOfNumber)){
            return false
        } else if(name.length < 3){
            return false
        } else{
            return true
        }
    }
    public emailBuyerValidate(email:string):boolean{
        const validateEmail = /\S+@\S+\.\S+/g

        if(email.match(validateEmail)){
            return true 
        } else {
            return false
        }
    }
    public cpfBuyerValidate(cpf:string):boolean{
        const validateCpf = /\d\d\d.\d\d\d.\d\d\d-\d\d/g

        if(cpf.match(validateCpf) && cpf.length === 14){
            return true
        } else{
            return false
        }
    }
    public holderNameValidate(name:string):boolean{
        const validateHolderName = /[A-Za-z]+/g
        const validateHolderNameNumber = /[0-9]/

        if(!name){
            return false
        }

        if(name.length < 3){
            return false
        } else if(name.match(validateHolderNameNumber)){
            return false
        } else if(validateHolderName) {
            return true
        }
        return true
    }
    public numberCardValidate(numberCard:string):boolean{
        if(!numberCard){
            throw new Error("O campo de 'numero do cartão' não foi passado corretamente"); 
        }
        const validateAmericanExpress = /^(?:3[47][0-9]{13})$/g
        const validateVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g
        const validateMasterCard = /^(?:5[1-5][0-9]{14})$/g
        const validateDiscovery = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/g
        const validateDinersClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/g
        const validateJCB = /^(?:(?:2131|1800|35\d{3})\d{11})$/g

        if(numberCard.match(validateAmericanExpress)){
            return true; //APENAS NUMEROS QUE COMECEM COM 34 OU 37, COMPRIMENTO DE 15 DIGITOS
        }
        if(numberCard.match(validateVisa)){
            return true; //APENAS NUMERO QUE COMECEM COM 4, COMPRIMENTO DE 13 OU 16 DIGITOS
        }
        if(numberCard.match(validateMasterCard)){
            return true; //APENAS NUMEROS QUE COMECEM COM 51 OU 55, COMPRIMENTO DE 16 DIGITOS
        }
        if(numberCard.match(validateDiscovery)){
            return true;  //APENAS NUMEROS QUE COMECEM COM 6011, COMPRIMENTO DE 16 DIGITOS OU COMEÇANDO COM 5, COMPRIMENTO DE 15 DIGITOS
        }
        if(numberCard.match(validateDinersClub)){
            return true;  //APENAS NUMEROS QUE COMECEM COM 300 A 305, 36 OU 38, COMPRIMENTO DE 14 DIGITOS 
        }
        if(numberCard.match(validateJCB)){
            return true;  //APENAS NUMEROS QUE COMECEM COM 2131 OU 1800, COMPRIMENTO DE 15 DIGITOS OU COMEÇANDO COM 35, COMPRIMENTO DE 16 DIGITOS 
        }
        else{
            return false;
        }
    }
    public expirationDateValidate(date:string):boolean{
        const calcSplit = date.split("/")
        const mesSplit = Number(calcSplit[0]) + 1 
        const anoSplit = Number(calcSplit[1])

        const dateNow = new Date()
        const month = dateNow.getMonth()
        const year = dateNow.getFullYear()

        if(anoSplit < year){
            return false
        } else if(anoSplit < year && month < mesSplit ){
            return false
        }

        return true
    }

    public cvvValidate(number:string):boolean{
        if(!number){
            throw new Error("O campo de 'cvv' do cartão não foi preenchido corretamente");
        }
        if(number.length !== 3){
            return false
        } else {
            return true
        }
    }
    public typePaymentValidateCard(typePayment:string):boolean{
        switch (typePayment) {
            case "Credit Card":   
            case "credit card":
                return true
            break         
            default:
                return false
            break;
        }
    }
    public typePaymentValidateSlip(typePayment:string):boolean{
        switch (typePayment) {
            case "Slip":   
            case "slip":
                return true
            break         
            default:
                return false
            break;
        }
    }
}
/*
REGEX - EXPRESSOES REGULARES

1) const regex = /\d\d\d\d\d-\d\d\d/ 

a regex acima irá verificar se o parametro que foi passado corresponde a ela.

2) const regex = /\d\d\d\d\d-?\d\d\d/ 
a regex acima agora irá levar em conta também os numero que não tiverem o hífen

const regex = /\./
const regex = /\@/
const regex = /\-/
const regex = /\joao/

A regex acima busca pelo objeto literal que foi passado logo após a barra invertida.

exemplo: 
    target = string = "Olá amigos. Tudo bem com voces?, espero que sim."
    No caso acima ele irá achar dois pontos ".".

3) const regex = /\s/

A regex acima irá achar espaços em branco

4) const regex = //[A-Za-z0-9_]

A regex acima irá verificar se o parametro passado corresponde com letras de A-Z maiusculas, de a-z 
minusculas, de 0-9 numeros e que possuam o "underline"
*/