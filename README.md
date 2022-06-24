<h1>Seja bem-vindo a API de pagamentos do WIRECARD!</h1>

<p>Deixa eu te contar uma história. Há um tempo atras o pessoal me designou a tarefa de criar uma API de pagamentos...
Essa API seria apenas uma pequena parte do WIRECARD.</p>

<p>Como eu tinha de montar apenas uma parte desta API, alguns tópicos foram me passados para que eu pudesse desenvolve-la, que são esses 5 endpoints que estarão abaixo.</p>

<p>AHH, e aqui eu ensino voces a como usar a API que desenvolvi com muito carinho(e suor, rs), brincadeiras a parte abaixo terá algumas informações básicas e técnicas e logo como usa-la. Obrigado.</p> 

<h3>- Informações</h3>
<p>Desenvolvida por: Arthur Kelvim de Oliveira Silva</p>
<p>Escola de ensino: Labenu</p>
<p>Linguagens utilizadas: NODE e TYPESCRIPT.</p>
<p>Possui testes Unitários: SIM.</p>
<p>Possui Banco de Dados: SIM e utilizo a linguagem SQL para manipulação.</p>
<p>Url base: https://arthurcase-1.herokuapp.com/</p>

<h3>-Endpoint para pagamento com Cartão de Crédito</h3>

    Exemplo de requisição:</h5>

    POST - https://arthurcase-1.herokuapp.com/payment/card

    BODY REQUEST = {
        "nameBuyer":"joao mathias",
        "emailBuyer":"vini@gmail.com", 
        "cpfBuyer":"452.753.864-99",
        "typePayment":"credit card", 
        "cardHolderName":"Maria do socorro", 
        "cardNumber":"378956457812451", 
        "cardExpirationDate":"08/2027", 
        "cardCvv":"791"
    }

    ATENÇÃO: nesta API apenas 6 tipos de cartões são válidos, listo abaixo quais são e como são os modelos aceitavéis.

    American Express: começando com 34 ou 37 e comprimento de 15 digitos.
    Visa: começando com 4, comprimento de 13 ou 16 digitos. 
    MasterCard: começando com 51 a 55, comprimento de 16 digitos.
    Discover: começando com 6011, comprimento de 16 ou iniciando com 5, comprimento de 15 digitos.
    Diners Club: começando com 300 a 305, 36 ou 38, comprimento de 14 digitos.
    JCB: começando com 2131 ou 1800, comprimento de 15 digitos ou começando com 35, comprimento de 16 digitos.

    ATENÇÃO: o campo de CPF necessita-se que seja preenchido com os pontos e hífen antes dos dois número finais e isso vale tanto para o endpoint de pagamento com boleto quanto para este.

    ATENÇÃO: no campo de "typePayment" é necessário que seja colocado "credit card"(minusculo) ou "Credit Card"(maiusculo), somente estes dois são permitidos, por que voce está no endpoint de pagamento com cartão de credito(credit card). 

    Exemplo de saida: 

    {
        "idPayment": "ede8b1b7-77de-4cd8-b29f-fe3d8d9e020e",
        "nameBuyer": "joao mathias",
        "cpfBuyer": "452.753.864-99",
        "status": "accepted"
    }

<h3>-Endpoint para pagamento com boleto</h3>

    Exemplo de requisição:

    POST - https://arthurcase-1.herokuapp.com/payment/slip

    BODY REQUEST = {
        "nameBuyer":"joao lukas",
        "emailBuyer":"joao@gmail.com",
        "cpfBuyer":"456.159.123-78",
        "typePayment":"slip"
    }

    ATENÇÃO: no campo de "typePayment" é necessário que seja colocado "slip"(minusculo) ou "Slip"(maiusculo), somente estes dois são permitidos, por que voce está no endpoint de pagamento para boleto(slip).

    Exemplo de saída: 

    {
        "status": "aceppted",
        "slip": "9130576299599786000"
    }

<h3>-Endpoint para buscar um pagamento feito com cartão de crédito(credit card) </h3>

    Exemplo de requisição:

    GET - https://arthurcase-1.herokuapp.com/payment/card/:id

    PARAMS / KEY = id / VALUE = 'id do pagamento'

    ATENÇÃO: aqui a requisição será feito por params, onde a chave(KEY) se chama "id" e o valor(VALUE) será o id do pagamento que a pessoa fez anteriormente.

    Exemplo de saída: 

    {
        "idPayment": "4a48f744-68ea-494f-ba4d-9ed658917850",
        "amountPayment": 1472,
        "typePayment": "credit card",
        "status": "accepted"
    }

<h3>Endpoint para buscar um pagamento feito com boleto(slip)</h3>

    Exemplo de requisição:

    GET - https://arthurcase-1.herokuapp.com/payment/slip/:id

    PARAMS / KEY = id / VALUE = 'id do pagamento'

    ATENÇÃO: aqui a requisição será feito por params, onde a chave(KEY) se chama "id" e o valor(VALUE) será o id do pagamento que a pessoa fez anteriormente.

    Exemplo de saída: 

    {
        "idPayment": "4a48f744-68ea-494f-ba4d-9ed658917850",
        "amountPayment": 1472,
        "typePayment": "credit card",
        "status": "accepted"
    }


<h5>Então pessoal, eu espero que tenham gostado, é uma API super simples, mas que já mostra um pouco de mim, eu irei deixar a API aqui por que futuramente prentendo melhora-la e usá-la para estudos e insight de futuros projetos.</h5> 
<h5>As minha rede sociais e contatos encontra-se na descrição do meu perfil, fiquem a vontade para me contatar.<h5> 

<p>console.log("BY BY :D")</p>

