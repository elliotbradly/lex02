import { Action } from "../interface/action.interface";
import Link from "../interface/link.interface";
import GamePadAction from "./fce/game-pad.bit.interface";
import TitleBit from "./fce/title.bit.interface";
import ResizeBit from "./fce/resize.bit.interface";

export const COUNT = "[title action] Count";
export class Count implements Action {
  readonly type = COUNT;
}

export const RESIZE = "[stage action] Resize";
export class Resize implements Action {
  readonly type = RESIZE;
  constructor(public bale: ResizeBit) {}
}

export const PAD_PRESS = "[play action] Pad Press";
export class PadPress implements Action {
  readonly type = PAD_PRESS;
  constructor(public bale: GamePadAction) {}
}

export const UPDATE_PATH = "[play action] Update Path";
export class UpdatePath implements Action {
  readonly type = UPDATE_PATH;
  constructor(public bale: Link) {}
}

export const TITLE_OPEN = "[wakeTitle action] Waking Title";
export class OpenTitle implements Action {
  readonly type = TITLE_OPEN;
  constructor(public bale: TitleBit) {}
}

export type Actions = Count | PadPress | Resize | UpdatePath | OpenTitle;
