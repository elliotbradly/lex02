"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READ_AVID = "[Memory Action] Read Avid";
class ReadAvid {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_AVID;
    }
}
exports.ReadAvid = ReadAvid;
exports.WRITE_POWER = "[Memory Action] Write Power";
class WritePower {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_POWER;
    }
}
exports.WritePower = WritePower;
exports.INIT_MEMORY = "[Memory Action] Init Memory";
class InitMemory {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MEMORY;
    }
}
exports.InitMemory = InitMemory;
exports.AWAKE_MEMORY = "[Memory Action] Awake Memory";
class AwakeMemory {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AWAKE_MEMORY;
    }
}
exports.AwakeMemory = AwakeMemory;
exports.MEMORY_OPEN = "[Memory Action] Waking Memory";
class Memory {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MEMORY_OPEN;
    }
}
exports.Memory = Memory;
//# sourceMappingURL=memory.action.js.map