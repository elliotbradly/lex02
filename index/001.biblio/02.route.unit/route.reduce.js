"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone = require("clone-deep");
const Act = require("./route.action");
const route_model_1 = require("./route.model");
const Buzz = require("./route.buzzer");
function reducer(model = new route_model_1.RouteModel(), act, state) {
    switch (act.type) {
        case Act.AWAKE_ROUTE:
            return Buzz.awakeRoute(clone(model), act.bale, state);
        case Act.INIT_ROUTE:
            return Buzz.initRoute(clone(model), act.bale, state);
        case Act.ROUTE_OPEN:
            return Buzz.writeRoute(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=route.reduce.js.map