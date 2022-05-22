"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validations = void 0;
class Validations {
    nameBuyerValidate(name) {
        const validateNameOfNumber = /[0-9]/;
        if (name.match(validateNameOfNumber)) {
            return false;
        }
        else if (name.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    emailBuyerValidate(email) {
        const validateEmail = /\S+@\S+\.\S+/g;
        if (email.match(validateEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
    cpfBuyerValidate(cpf) {
        const validateCpf = /\d\d\d.\d\d\d.\d\d\d-\d\d/g;
        if (cpf.match(validateCpf) && cpf.length === 14) {
            return true;
        }
        else {
            return false;
        }
    }
    holderNameValidate(name) {
        const validateHolderName = /[A-Za-z]+/g;
        const validateHolderNameNumber = /[0-9]/;
        if (!name) {
            return false;
        }
        if (name.length < 3) {
            return false;
        }
        else if (name.match(validateHolderNameNumber)) {
            return false;
        }
        else if (validateHolderName) {
            return true;
        }
        return true;
    }
    numberCardValidate(numberCard) {
        if (!numberCard) {
            throw new Error("O campo de 'numero do cartão' não foi passado corretamente");
        }
        const validateAmericanExpress = /^(?:3[47][0-9]{13})$/g;
        const validateVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g;
        const validateMasterCard = /^(?:5[1-5][0-9]{14})$/g;
        const validateDiscovery = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/g;
        const validateDinersClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/g;
        const validateJCB = /^(?:(?:2131|1800|35\d{3})\d{11})$/g;
        if (numberCard.match(validateAmericanExpress)) {
            return true;
        }
        if (numberCard.match(validateVisa)) {
            return true;
        }
        if (numberCard.match(validateMasterCard)) {
            return true;
        }
        if (numberCard.match(validateDiscovery)) {
            return true;
        }
        if (numberCard.match(validateDinersClub)) {
            return true;
        }
        if (numberCard.match(validateJCB)) {
            return true;
        }
        else {
            return false;
        }
    }
    expirationDateValidate(date) {
        const calcSplit = date.split("/");
        const mesSplit = Number(calcSplit[0]) + 1;
        const anoSplit = Number(calcSplit[1]);
        const dateNow = new Date();
        const month = dateNow.getMonth();
        const year = dateNow.getFullYear();
        if (anoSplit < year) {
            return false;
        }
        else if (anoSplit < year && month < mesSplit) {
            return false;
        }
        return true;
    }
    cvvValidate(number) {
        if (!number) {
            throw new Error("O campo de 'cvv' do cartão não foi preenchido corretamente");
        }
        if (number.length !== 3) {
            return false;
        }
        else {
            return true;
        }
    }
    typePaymentValidateCard(typePayment) {
        switch (typePayment) {
            case "Credit Card":
            case "credit card":
                return true;
                break;
            default:
                return false;
                break;
        }
    }
    typePaymentValidateSlip(typePayment) {
        switch (typePayment) {
            case "Slip":
            case "slip":
                return true;
                break;
            default:
                return false;
                break;
        }
    }
}
exports.Validations = Validations;
//# sourceMappingURL=Validations.js.map