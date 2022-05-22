"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataBase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
dotenv_1.default.config();
class BaseDataBase {
    constructor() {
        this.connection = (0, knex_1.default)({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_SCHEMA,
                port: 3306,
                multipleStatements: true
            }
        });
    }
}
exports.BaseDataBase = BaseDataBase;
//# sourceMappingURL=BaseDataBase.js.map