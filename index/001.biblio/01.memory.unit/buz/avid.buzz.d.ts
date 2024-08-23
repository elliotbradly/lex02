import { MemoryModel } from "../memory.model";
import State from "../../00.core/state";
import AvidBit from "../fce/avid.bit";
export declare const readAvid: (cpy: MemoryModel, bal: AvidBit, ste: State) => Promise<MemoryModel>;
