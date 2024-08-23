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
const Act = require("../title.action");
const path_process_1 = require("../prc/path.process");
const typescript_ioc_1 = require("typescript-ioc");
class GamePadArc extends arc_form_1.default {
    constructor(state) {
        super(state);
        this.state = state;
        this.read = (dat) => {
            //console.log("do something good");
        };
        this.list = (dat) => { };
        this.update = (dat) => this.path.move(this.state, Act.PAD_PRESS, dat);
        this.create = (dat) => {
            //this.state.dispatch({ type: Act.INIT_BEEING });
        };
        this.delete = (dat) => { };
    }
}
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", path_process_1.default)
], GamePadArc.prototype, "path", void 0);
exports.default = GamePadArc;
//# sourceMappingURL=03.game-pad.title.arc.js.map