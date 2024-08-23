"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const ActM = require("../../01.memory.unit/memory.action");
exports.default = (app, ste) => {
    app.use("/users", route);
    route.get("/me", (req, res) => {
        ste.dispatch({ type: ActM.READ_AVID, bale: { nom: "simo", res: res } });
    });
};
//# sourceMappingURL=user.js.map