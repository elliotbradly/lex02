import { Action } from "../00.core/interface/action.interface";
import  BeginBit  from "./fce/begin.bit";

export const BEGIN_OPEN = "[Begin Action] Waking Begin";
export class Begin implements Action {
 readonly type = BEGIN_OPEN;
 constructor(public bale: BeginBit) {}
}

export type Actions = Begin;
