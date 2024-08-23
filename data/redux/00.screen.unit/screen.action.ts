import { Action } from "../00.core/interface/action.interface";
import  ScreenBit  from "./fce/screen.bit";

export const SCREEN_OPEN = "[Screen Action] Waking Screen";
export class Screen implements Action {
 readonly type = SCREEN_OPEN;
 constructor(public bale: ScreenBit) {}
}

export type Actions = Screen;
