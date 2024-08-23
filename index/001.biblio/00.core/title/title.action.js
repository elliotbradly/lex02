"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COUNT = "[title action] Count";
class Count {
    constructor() {
        this.type = exports.COUNT;
    }
}
exports.Count = Count;
exports.RESIZE = "[stage action] Resize";
class Resize {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RESIZE;
    }
}
exports.Resize = Resize;
exports.PAD_PRESS = "[play action] Pad Press";
class PadPress {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PAD_PRESS;
    }
}
exports.PadPress = PadPress;
exports.UPDATE_PATH = "[play action] Update Path";
class UpdatePath {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PATH;
    }
}
exports.UpdatePath = UpdatePath;
exports.TITLE_OPEN = "[wakeTitle action] Waking Title";
class OpenTitle {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TITLE_OPEN;
    }
}
exports.OpenTitle = OpenTitle;
//# sourceMappingURL=title.action.js.map