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
const typeorm_1 = require("typeorm");
exports.readAvid = (cpy, bal, ste) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("init memory");
    const manager = typeorm_1.getManager();
    const rawData = yield manager.query(`SELECT * FROM AVID`);
    console.log("show me the avid " + JSON.stringify(rawData));
    bal.res.json(rawData).status(200);
    return cpy;
});
//# sourceMappingURL=avid.buzz.js.map