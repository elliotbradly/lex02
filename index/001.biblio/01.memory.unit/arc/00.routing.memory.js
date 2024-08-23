"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_index_memory_arc_1 = require("./01.index.memory.arc");
exports.root = "memory";
exports.routes = [
    {
        path: "index",
        arcType: _01_index_memory_arc_1.default,
        arc: null
    }
];
class DisplayRoutingUnit {
    constructor(router, state) {
        exports.routes.forEach(a => {
            a.path = exports.root + "/" + a.path;
            a.arc = new a.arcType(state);
            router.register(a);
        });
    }
}
exports.default = DisplayRoutingUnit;
//# sourceMappingURL=00.routing.memory.js.map