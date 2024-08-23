import { Action } from "990.surface/00.core/interface/action.interface";

export default interface ListenerBit {
  type: string;
  target: string;
  method: any;
}
