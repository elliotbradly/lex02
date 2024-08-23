import { Action } from "../00.core/interface/action.interface";
import  GlobBit  from "./fce/glob.bit";

export const GLOB_OPEN = "[Glob Action] Waking Glob";
export class Glob implements Action {
 readonly type = GLOB_OPEN;
 constructor(public bale: GlobBit) {}
}

export type Actions = Glob;
