"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateID = void 0;
const uuid_1 = require("uuid");
class GenerateID {
    newId() {
        const id = (0, uuid_1.v4)();
        return id;
    }
}
exports.GenerateID = GenerateID;
//# sourceMappingURL=GenerateID.js.map