"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = require("./router/Router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/payment", Router_1.paymentRouter);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao rodar o servidor`);
    }
});
//# sourceMappingURL=index.js.map