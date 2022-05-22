"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validations_1 = require("../src/services/Validations");
describe("Testes unitários das funçoes que valida pagamento para cartão de credito", () => {
    const validations = new Validations_1.Validations();
    test("Testando o nome passado na função nameBuyerValidate", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = validations.nameBuyerValidate("arthur kelvim");
        expect(result).toBe(true);
    }));
    test("Teste unitário para a função de cpf", () => __awaiter(void 0, void 0, void 0, function* () {
        const result1 = validations.emailBuyerValidate("arthur@gmail.com");
        expect(result1).toBe(true);
    }));
    test("Teste unitário para a função de cpf", () => __awaiter(void 0, void 0, void 0, function* () {
        const result2 = validations.cpfBuyerValidate("999.489.789-98");
        expect(result2).toBe(true);
    }));
    test("Teste unitário que valida a função de tipo de pagamento", () => __awaiter(void 0, void 0, void 0, function* () {
        const result3 = validations.typePaymentValidateCard("credit card");
        expect(result3).toBe(true);
    }));
    test("Teste unitário que valida a função de titular do cartão", () => {
        const result4 = validations.holderNameValidate("Thiago Alcantara");
        expect(result4).toBe(true);
    });
    test("Teste unitário que valida a função numberCardValidate", () => {
        const result5 = validations.numberCardValidate("378956457812451");
        expect(result5).toBe(true);
    });
    test("Teste unitário que válida a função expirationDateValidate", () => {
        const result6 = validations.expirationDateValidate("08/2025");
        expect(result6).toBe(true);
    });
    test("Teste unitário que válida a função cvvValidate", () => {
        const result7 = validations.cvvValidate("871");
        expect(result7).toBe(true);
    });
});
//# sourceMappingURL=validateFuncCard.test.js.map