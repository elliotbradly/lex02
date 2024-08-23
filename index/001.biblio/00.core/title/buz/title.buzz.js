"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeTitle = (cpy, bal) => {
    delete cpy.size;
    cpy.size = { width: bal.width, height: bal.height };
};
exports.writeCount = (cpy) => {
    cpy.count += 1;
    return cpy;
};
exports.updatePath = (cpy, bale) => {
    cpy.path = bale;
    return cpy;
};
exports.writeGamePad = (cpy, bale) => {
    cpy.padValue = null;
    cpy.padValue = bale;
    return cpy;
};
//# sourceMappingURL=title.buzz.js.map