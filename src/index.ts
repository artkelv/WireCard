import express from "express"; //aqui importamos o express, lib necessaria para desenvolver APIS
import {AddressInfo} from "net"; // X
import { paymentRouter } from "./router/Router";

const app = express(); 

app.use(express.json());
//app.use("/users", userRouter);//AQUI ESTAMOS CHAMANDO A FUNÇÃO "USERROUTER", ONDE ESTA O ENDPOINT DE FATO
app.use("/payment", paymentRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    } else {
        console.error(`Falha ao rodar o servidor`)
    }
}) 


















/*  
1 - ) Importação da lib express, necessaria para desenvolver uma API.
7 - )Chamamos um "roteador", lá será onde estará presente os endpoints previamente indicados pelas funções que
chamamos.
9 - 16 ) Aqui cria-se o servidor onde sua aplicação será executada
OBS: listen é um método do express que recebe dois parametro, uma porta e uma callback seguida de uma informação
que irá confirmar que a nossa aplicação está funcionando.
 */