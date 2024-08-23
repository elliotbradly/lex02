"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const B = require("../constant/BASIC");
class Path {
    constructor(pth, mth = null, dat) {
        this.path = pth;
        this.method = mth;
        this.data = dat;
        if (this.method == null)
            this.method = B.READ;
    }
}
exports.default = Path;
//# sourceMappingURL=path.form.js.map