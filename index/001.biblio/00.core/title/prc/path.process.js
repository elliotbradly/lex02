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
const B = require("../../constant/BASIC");
const Act = require("../title.action");
const queryString = require("query-string");
const path_form_1 = require("../../form/path.form");
let PathProcess = class PathProcess {
    constructor() {
        this.move = (state, type, bale) => {
            state.dispatch({
                type: type,
                bale: bale,
            });
        };
        this.link = (ste, pth, mth, dat, spd) => {
            if (mth == null)
                mth = B.READ;
            if (spd == null)
                spd = 1;
            //remember you can not handle nested objects
            if (dat != null)
                pth += "?" + queryString.stringify(dat);
            if (spd == null)
                spd = 0;
            if (spd == 0) {
                ste.dispatch({
                    type: Act.UPDATE_PATH,
                    bale: new path_form_1.default(pth, mth),
                });
                return;
            }
            if (spd == 1) {
                process.nextTick(() => {
                    ste.dispatch({
                        type: Act.UPDATE_PATH,
                        bale: new path_form_1.default(pth, mth),
                    });
                });
            }
            else {
                setTimeout(() => {
                    ste.dispatch({
                        type: Act.UPDATE_PATH,
                        bale: new path_form_1.default(pth, mth),
                    });
                }, spd);
            }
        };
    }
};
PathProcess = __decorate([
    typescript_ioc_1.Singleton,
    __metadata("design:paramtypes", [])
], PathProcess);
exports.default = PathProcess;
//# sourceMappingURL=path.process.js.map