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
const arc_form_1 = require("../../00.core/form/arc.form");
const path_process_1 = require("../../00.core/title/prc/path.process");
const typescript_ioc_1 = require("typescript-ioc");
const Act = require("../route.action");
class IndexRouteArc extends arc_form_1.default {
    constructor(state) {
        super(state);
        this.state = state;
        this.init = (dat) => this.path.move(this.state, Act.INIT_ROUTE, dat);
        this.awake = (dat) => this.path.move(this.state, Act.AWAKE_ROUTE, dat);
    }
}
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", path_process_1.default)
], IndexRouteArc.prototype, "path", void 0);
exports.default = IndexRouteArc;
//# sourceMappingURL=01.index.route.arc.js.map