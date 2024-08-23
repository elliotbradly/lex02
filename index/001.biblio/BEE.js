"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const title_unit_1 = require("./00.core/title/title.unit");
const title_model_1 = require("./00.core/title/title.model");
const reduceFromTitle = require("./00.core/title/title.reduce");
const memory_unit_1 = require("./01.memory.unit/memory.unit");
const route_unit_1 = require("./02.route.unit/route.unit");
const memory_model_1 = require("./01.memory.unit/memory.model");
const route_model_1 = require("./02.route.unit/route.model");
exports.list = [title_unit_1.default, memory_unit_1.default, route_unit_1.default];
const reduceFromMemory = require("./01.memory.unit/memory.reduce");
const reduceFromRoute = require("./02.route.unit/route.reduce");
exports.reducer = {
    title: reduceFromTitle.reducer,
    memory: reduceFromMemory.reducer,
    route: reduceFromRoute.reducer,
};
class UnitData {
    constructor() {
        this.auto = 0;
        this.rootData = "../data";
        this.localData = "./data";
        this.title = new title_model_1.TitleModel();
        this.memory = new memory_model_1.MemoryModel();
        this.route = new route_model_1.RouteModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map