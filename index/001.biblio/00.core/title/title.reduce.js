"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone = require("clone-deep");
const Act = require("./title.action");
const title_model_1 = require("./title.model");
const Buzz = require("./title.buzzer");
function reducer(model = new title_model_1.TitleModel(), act, state) {
    switch (act.type) {
        case Act.PAD_PRESS:
            return Buzz.writeGamePad(clone(model), act.bale);
        case Act.COUNT:
            return Buzz.writeCount(clone(model));
        case Act.UPDATE_PATH:
            return Buzz.updatePath(clone(model), act.bale);
        case Act.RESIZE:
            return Buzz.resizeTitle(clone(model), act.bale);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=title.reduce.js.map