import { MemoryModel } from "../memory.model";
import Memory from "../fce/memory.interface";
import State from "../../00.core/state";
import MemoryBit from "../fce/memory.bit";
export declare const initMemory: (cpy: MemoryModel, bal: MemoryBit, ste: State) => MemoryModel;
export declare const writePower: (cpy: MemoryModel, bal: boolean, ste: State) => MemoryModel;
export declare const awakeMemory: (cpy: MemoryModel, bal: MemoryBit, ste: State) => MemoryModel;
export declare const writeMemory: (cpy: MemoryModel, bal: Memory, ste: State) => MemoryModel;
