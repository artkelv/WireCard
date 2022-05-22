import { Validations } from "../src/services/Validations"

describe("Testes unitários das funçoes que valida pagamento para cartão de credito", ()=>{
    const validations = new Validations()

    test("Testando o nome passado na função nameBuyerValidate", async () => {
        const result = validations.nameBuyerValidate("arthur kelvim")
        expect(result).toBe(true)
    })
    test("Teste unitário para a função de cpf", async () => {
        const result1 = validations.emailBuyerValidate("arthur@gmail.com")
        expect(result1).toBe(true)
    })
    test("Teste unitário para a função de cpf", async () => {
        const result2 = validations.cpfBuyerValidate("999.489.789-98")
        expect(result2).toBe(true)
    })
    test("Teste unitário que valida a função de tipo de pagamento", async () => {
        const result3 = validations.typePaymentValidateCard("credit card")
        expect(result3).toBe(true)
    })
    test("Teste unitário que valida a função de titular do cartão", () => {
        const result4 = validations.holderNameValidate("Thiago Alcantara")
        expect(result4).toBe(true)
    })
    test("Teste unitário que valida a função numberCardValidate", () => {
        const result5 = validations.numberCardValidate("378956457812451")
        expect(result5).toBe(true)
    })
    test("Teste unitário que válida a função expirationDateValidate", () => {
        const result6 = validations.expirationDateValidate("08/2025")
        expect(result6).toBe(true)
    })
    test("Teste unitário que válida a função cvvValidate", () => {
        const result7 = validations.cvvValidate("871")
        expect(result7).toBe(true)
    })
})
