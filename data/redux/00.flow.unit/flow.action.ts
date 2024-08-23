import { Action } from "../00.core/interface/action.interface";
import  FlowBit  from "./fce/flow.bit";

export const FLOW_OPEN = "[Flow Action] Waking Flow";
export class Flow implements Action {
 readonly type = FLOW_OPEN;
 constructor(public bale: FlowBit) {}
}

export type Actions = Flow;
