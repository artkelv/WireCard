import { Validations } from "../src/services/Validations"

describe("Testes unitários das funçoes que valida pagamento para boleto", ()=>{
    const validations = new Validations()

    test("Erro que deve retornar quando o nome for inválido", async () => {
        const result = validations.nameBuyerValidate("arthur kelvim")
        expect(result).toBe(true)
    })
    test("Erro que deve retornar quando o email for inválido", async () => {
        const result1 = validations.emailBuyerValidate("arthur@gmail.com")
        expect(result1).toBe(true)
    })
    test("Erro que deve retornar quando o cpf for inválido", async () => {
        const result2 = validations.cpfBuyerValidate("999.489.789-98")
        expect(result2).toBe(true)
    })
    test("Erro que deve retornar quando o tipo de pagamento for inválido para cartão", async () => {
        const result3 = validations.typePaymentValidateCard("credit card")
        expect(result3).toBe(true)
    })
    test("Erro que deve retornar quando o tipo de pagamento for inválido para boleto", async () => {
        const result4 = validations.typePaymentValidateSlip("slip")
        expect(result4).toBe(true)
    })
})