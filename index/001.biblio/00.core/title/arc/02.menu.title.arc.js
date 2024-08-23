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
const title_process_1 = require("../prc/title.process");
class MenuTitleArc extends arc_form_1.default {
    constructor(state) {
        super(state);
        this.state = state;
        this.read = (dat) => {
            //console.log("do something good");
            // this.title.menu(this.state, index(this.state));
        };
        this.list = (dat) => { };
        this.update = (dat) => {
            //this.path.move(this.state, Act.GRID_MENU_ACTION, dat.value);
        };
        //create = dat => this.path.move(this.state, Act.GRID_MENU, dat);
        this.delete = (dat) => { };
    }
}
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", path_process_1.default)
], MenuTitleArc.prototype, "path", void 0);
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", title_process_1.default)
], MenuTitleArc.prototype, "title", void 0);
exports.default = MenuTitleArc;
//# sourceMappingURL=02.menu.title.arc.js.map