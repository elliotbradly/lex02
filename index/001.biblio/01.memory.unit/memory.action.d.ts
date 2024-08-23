import { Action } from "../00.core/interface/action.interface";
import MemoryBit from "./fce/memory.bit";
import AvidBit from "./fce/avid.bit";
export declare const READ_AVID = "[Memory Action] Read Avid";
export declare class ReadAvid implements Action {
    bale: AvidBit;
    readonly type = "[Memory Action] Read Avid";
    constructor(bale: AvidBit);
}
export declare const WRITE_POWER = "[Memory Action] Write Power";
export declare class WritePower implements Action {
    bale: boolean;
    readonly type = "[Memory Action] Write Power";
    constructor(bale: boolean);
}
export declare const INIT_MEMORY = "[Memory Action] Init Memory";
export declare class InitMemory implements Action {
    bale: MemoryBit;
    readonly type = "[Memory Action] Init Memory";
    constructor(bale: MemoryBit);
}
export declare const AWAKE_MEMORY = "[Memory Action] Awake Memory";
export declare class AwakeMemory implements Action {
    bale: MemoryBit;
    readonly type = "[Memory Action] Awake Memory";
    constructor(bale: MemoryBit);
}
export declare const MEMORY_OPEN = "[Memory Action] Waking Memory";
export declare class Memory implements Action {
    bale: MemoryBit;
    readonly type = "[Memory Action] Waking Memory";
    constructor(bale: MemoryBit);
}
export declare type Actions = ReadAvid | InitMemory | WritePower | AwakeMemory | Memory;
