"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const _00_routing_memory_1 = require("./arc/00.routing.memory");
const line_1 = require("../00.core/line");
const state_1 = require("../00.core/state");
let MemoryUnit = class MemoryUnit {
    constructor(router, state) {
        //console.log("construnct sim unit " + this.router);
        this.routing = new _00_routing_memory_1.default(router, state);
    }
};
MemoryUnit = __decorate([
    typescript_ioc_1.Singleton,
    __metadata("design:paramtypes", [line_1.default, state_1.default])
], MemoryUnit);
exports.default = MemoryUnit;
//# sourceMappingURL=memory.unit.js.map