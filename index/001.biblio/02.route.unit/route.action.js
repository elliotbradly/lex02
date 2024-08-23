"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_ROUTE = "[Route Action] Init Route";
class InitRoute {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_ROUTE;
    }
}
exports.InitRoute = InitRoute;
exports.AWAKE_ROUTE = "[Route Action] Waking Route";
class AwakeRoute {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AWAKE_ROUTE;
    }
}
exports.AwakeRoute = AwakeRoute;
exports.ROUTE_OPEN = "[Route Action] Waking Route";
class Route {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ROUTE_OPEN;
    }
}
exports.Route = Route;
//# sourceMappingURL=route.action.js.map