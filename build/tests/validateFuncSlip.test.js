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
describe("Testes unitários das funçoes que valida pagamento para boleto", () => {
    const validations = new Validations_1.Validations();
    test("Erro que deve retornar quando o nome for inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = validations.nameBuyerValidate("arthur kelvim");
        expect(result).toBe(true);
    }));
    test("Erro que deve retornar quando o email for inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        const result1 = validations.emailBuyerValidate("arthur@gmail.com");
        expect(result1).toBe(true);
    }));
    test("Erro que deve retornar quando o cpf for inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        const result2 = validations.cpfBuyerValidate("999.489.789-98");
        expect(result2).toBe(true);
    }));
    test("Erro que deve retornar quando o tipo de pagamento for inválido para cartão", () => __awaiter(void 0, void 0, void 0, function* () {
        const result3 = validations.typePaymentValidateCard("credit card");
        expect(result3).toBe(true);
    }));
    test("Erro que deve retornar quando o tipo de pagamento for inválido para boleto", () => __awaiter(void 0, void 0, void 0, function* () {
        const result4 = validations.typePaymentValidateSlip("slip");
        expect(result4).toBe(true);
    }));
});
//# sourceMappingURL=validateFuncSlip.test.js.map