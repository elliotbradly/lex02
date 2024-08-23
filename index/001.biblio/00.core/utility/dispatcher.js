"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Dispatcher extends rxjs_1.Subject {
    constructor() {
        super();
    }
    dispatch(value) {
        this.next(value);
    }
}
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=dispatcher.js.map