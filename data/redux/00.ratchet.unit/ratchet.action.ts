import { Action } from "../00.core/interface/action.interface";
import  RatchetBit  from "./fce/ratchet.bit";

export const RATCHET_OPEN = "[Ratchet Action] Waking Ratchet";
export class Ratchet implements Action {
 readonly type = RATCHET_OPEN;
 constructor(public bale: RatchetBit) {}
}

export type Actions = Ratchet;
