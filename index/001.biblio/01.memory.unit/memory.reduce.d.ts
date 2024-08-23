import * as Act from "./memory.action";
import { MemoryModel } from "./memory.model";
import State from "../00.core/state";
export declare function reducer(model: MemoryModel, act: Act.Actions, state?: State): MemoryModel | Promise<MemoryModel>;
