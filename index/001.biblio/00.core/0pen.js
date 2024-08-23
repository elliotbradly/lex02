"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const beeing_1 = require("./beeing");
const line_1 = require("./line");
const path_form_1 = require("./form/path.form");
const E = require("./constant/EVENT");
var EventEmitter = require("events").EventEmitter;
var self = {
    dev: true,
    wake: null,
    start: null,
    sim: null,
    line: null,
    route: null,
    bee: null,
    event: new EventEmitter()
};
self.wake = () => {
    self.bee = new beeing_1.default();
    self.line = new line_1.default();
    self.event.emit(E.COMPLETE);
    return self.line;
};
self.route = (pth, mth) => {
    var path = new path_form_1.default(pth, mth);
    self.line.route(path);
};
module.exports = self;
//# sourceMappingURL=0pen.js.map