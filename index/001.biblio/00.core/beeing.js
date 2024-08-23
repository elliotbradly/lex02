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
const state_1 = require("./state");
const line_1 = require("./line");
const TitleHark = require("./title/title.hark");
const path_process_1 = require("./title/prc/path.process");
const typescript_ioc_1 = require("typescript-ioc");
const B = require("./constant/BASIC");
const queryString = require("query-string");
const doT = require("dot");
const S = require("string");
const path_form_1 = require("./form/path.form");
const Import = require("../BEE");
class Beeing {
    constructor() {
        this.power = (val, mth, dat) => {
            if (mth == null)
                mth = B.CREATE;
            var list = val.split("\n");
            if (dat != null) {
                list.forEach((a, b) => {
                    //a = S(a).replaceAll(",", "*").s;
                    if (a == null)
                        return;
                    this.doTCompiled = doT.template(a);
                    list[b] = this.doTCompiled(dat);
                });
            }
            list.forEach((a) => {
                if (a.length <= 3)
                    return;
                if (S(a).contains("//"))
                    return; //true
                var dom = a.split(":")[0];
                if (dom == null)
                    return;
                dom = S(dom).collapseWhitespace().s;
                var sub = a.split(":")[1];
                if (sub == null)
                    return;
                sub = S(sub).collapseWhitespace().s;
                //console.log("dom " + dom);
                //console.log("sub " + sub);
                var comma = sub.split(",");
                comma.forEach((e, f) => {
                    comma[f] = S(e).collapseWhitespace().s;
                });
                var age = {
                    idx: comma[0],
                };
                //console.log(age.idx + " idx to work " + age.idx.length);
                var type = "";
                comma.forEach((a, b) => {
                    if (b == 0)
                        return;
                    //if (b % 2 == 1) console.log("dom: " + a);
                    if (b % 2 == 1)
                        type = a;
                    //if (b % 2 == 0) console.log("sub: " + a);
                    if (b % 2 == 0)
                        age[type] = a;
                    //if (b % 2 == 0) console.log("midling " + age[type]);
                });
                //console.log("age " + JSON.stringify(age));
                if (age.idx != null)
                    age.idx = S(age.idx).collapseWhitespace().s;
                this.sing(dom, mth, age);
            });
        };
        this.hark = (key, rsp) => {
            return this.state.hark(key).subscribe(rsp);
        };
        this.move = (type, bale) => this.path.move(this.state, type, bale);
        this.sing = (pth, mth, dat, spd) => {
            //console.log('send patth: ' + pth );
            if (pth.includes("/") == false)
                pth = pth + "/index";
            if (spd != null)
                return this.path.link(this.state, pth, mth, dat, spd);
            if (dat != null)
                pth += "?" + queryString.stringify(dat);
            return this.line.route(new path_form_1.default(pth, mth));
        };
        this.song = (song) => {
            console.log("show me song " + JSON.stringify(song));
            this.sing(song.pth, song.mth, song.dat, song.spd);
        };
        this.state = new state_1.default();
        this.line = new line_1.default();
        //this.imports.forEach((i) => new i(this.line, this.state));
        for (var k in Import.list)
            new Import.list[k](this.line, this.state);
        this.state.hark(TitleHark.PATH).subscribe((val) => this.line.route(val));
        this.value = this.state.value;
    }
}
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", path_process_1.default)
], Beeing.prototype, "path", void 0);
exports.default = Beeing;
//# sourceMappingURL=beeing.js.map