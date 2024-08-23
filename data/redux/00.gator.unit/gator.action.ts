import { Action } from "../00.core/interface/action.interface";
import  GatorBit  from "./fce/gator.bit";

export const GATOR_OPEN = "[Gator Action] Waking Gator";
export class Gator implements Action {
 readonly type = GATOR_OPEN;
 constructor(public bale: GatorBit) {}
}

export type Actions = Gator;
