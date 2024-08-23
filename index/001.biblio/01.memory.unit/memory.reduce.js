"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone = require("clone-deep");
const Act = require("./memory.action");
const memory_model_1 = require("./memory.model");
const Buzz = require("./memory.buzzer");
function reducer(model = new memory_model_1.MemoryModel(), act, state) {
    switch (act.type) {
        case Act.READ_AVID:
            return Buzz.readAvid(clone(model), act.bale, state);
        case Act.INIT_MEMORY:
            return Buzz.initMemory(clone(model), act.bale, state);
        case Act.AWAKE_MEMORY:
            return Buzz.awakeMemory(clone(model), act.bale, state);
        case Act.WRITE_POWER:
            return Buzz.writePower(clone(model), act.bale, state);
        case Act.MEMORY_OPEN:
            return Buzz.writeMemory(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=memory.reduce.js.map