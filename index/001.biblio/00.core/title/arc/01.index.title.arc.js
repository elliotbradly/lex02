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
const arc_form_1 = require("../../form/arc.form");
const path_process_1 = require("../prc/path.process");
const typescript_ioc_1 = require("typescript-ioc");
const Act = require("../title.action");
const title_process_1 = require("../prc/title.process");
class IndexTitleArc extends arc_form_1.default {
    constructor(state) {
        super(state);
        this.state = state;
        this.list = (dat) => this.path.move(this.state, Act.COUNT, dat);
        this.create = (dat) => this.path.move(this.state, Act.TITLE_OPEN, dat);
        this.update = (dat) => this.path.move(this.state, Act.RESIZE, dat);
        this.delete = (dat) => { };
    }
}
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", path_process_1.default)
], IndexTitleArc.prototype, "path", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", title_process_1.default)
], IndexTitleArc.prototype, "title", void 0);
exports.default = IndexTitleArc;
//# sourceMappingURL=01.index.title.arc.js.map