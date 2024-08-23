import { Action } from "../interface/action.interface";
import Link from "../interface/link.interface";
import GamePadAction from "./fce/game-pad.bit.interface";
import TitleBit from "./fce/title.bit.interface";
import ResizeBit from "./fce/resize.bit.interface";
export declare const COUNT = "[title action] Count";
export declare class Count implements Action {
    readonly type = "[title action] Count";
}
export declare const RESIZE = "[stage action] Resize";
export declare class Resize implements Action {
    bale: ResizeBit;
    readonly type = "[stage action] Resize";
    constructor(bale: ResizeBit);
}
export declare const PAD_PRESS = "[play action] Pad Press";
export declare class PadPress implements Action {
    bale: GamePadAction;
    readonly type = "[play action] Pad Press";
    constructor(bale: GamePadAction);
}
export declare const UPDATE_PATH = "[play action] Update Path";
export declare class UpdatePath implements Action {
    bale: Link;
    readonly type = "[play action] Update Path";
    constructor(bale: Link);
}
export declare const TITLE_OPEN = "[wakeTitle action] Waking Title";
export declare class OpenTitle implements Action {
    bale: TitleBit;
    readonly type = "[wakeTitle action] Waking Title";
    constructor(bale: TitleBit);
}
export declare type Actions = Count | PadPress | Resize | UpdatePath | OpenTitle;
