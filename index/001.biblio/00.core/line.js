"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryString = require("query-string");
const path_form_1 = require("./form/path.form");
const B = require("./constant/BASIC");
class Line {
    constructor() {
        this.address = {};
        this.addressList = [];
    }
    route(lnk) {
        if (lnk == null)
            return;
        if (typeof lnk === "string" || lnk instanceof String) {
            lnk = new path_form_1.default(String(lnk));
        }
        if (lnk.method == null)
            lnk.method = B.READ;
        //this.log.save(lnk);
        var data;
        var params = lnk.path.split("?");
        if (params.length > 1) {
            data = queryString.parseUrl(lnk.path).query;
            lnk.path = params[0];
        }
        if (lnk.data != null)
            data = lnk.data;
        var out = { path: "", bale: {} };
        return this.action(lnk.method, lnk.path, data);
    }
    register(dat) {
        var closed = false;
        this.addressList.forEach((a) => {
            if (a.path == dat.path)
                return (closed = true);
        });
        if (closed)
            return console.log(dat.path + " ROUTE CLOSED");
        this.address[dat.path] = dat.arc;
        this.addressList.push(dat);
    }
    action(typ, pth, dat, cbk = null) {
        var item = this.address[pth];
        if (item == null)
            return console.log("item missing pth " + pth);
        if (item[typ] == null)
            throw new Error("action not possible for " + typ);
        dat = item[typ](dat);
        if (cbk != null)
            cbk(dat);
        return dat;
    }
}
exports.default = Line;
//# sourceMappingURL=line.js.map