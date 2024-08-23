import { Action } from "../00.core/interface/action.interface";
import OpenBit from "./fce/open.bit";
import FileBit from "./fce/file.bit";
import AvaFormBit from "./fce/form.beeing";
import ListenerBit from "./fce/listener.bit";

export const WRITE_GLEAM = "[Open action] Write Gleam";
export class WriteGleam implements Action {
  readonly type = WRITE_GLEAM;
  constructor(public bale: any) {}
}

export const REMOVE_DRAGABLE = "[Open action] Remove Dragable Listeners";
export class RemoveDragable implements Action {
  readonly type = REMOVE_DRAGABLE;
}

export const REMOVE_ALL_LISTENERS = "[Open action] Remove All Listeners";
export class RemoveAllListeners implements Action {
  readonly type = REMOVE_ALL_LISTENERS;
  constructor(public bale: ListenerBit) {}
}

export const CREATE_LISTENER = "[Open action] Create Listener";
export class CreateListener implements Action {
  readonly type = CREATE_LISTENER;
  constructor(public bale: ListenerBit) {}
}

export const WRITE_CURRENT_NOM = "[Open action] Write Current Nom";
export class WriteCurrentNom implements Action {
  readonly type = WRITE_CURRENT_NOM;
  constructor(public bale: string) {}
}

export const WRITE_INPUT_BEEING = "[Open action] Write Input Beeing";
export class WriteInputBeeing implements Action {
  readonly type = WRITE_INPUT_BEEING;
  constructor(public bale: string) {}
}

export const WRITE_INPUT_NAME = "[Open action] Write Input Name";
export class WriteInputName implements Action {
  readonly type = WRITE_INPUT_NAME;
  constructor(public bale: string) {}
}

export const UPDATE_FORM = "[Open action] Update Form";
export class UpdateForm implements Action {
  readonly type = UPDATE_FORM;
  constructor(public bale: AvaFormBit) {}
}

export const CREATE_AVA_FORM = "[Open action] Create Ava Form";
export class CreateAvaForm implements Action {
  readonly type = CREATE_AVA_FORM;
  constructor(public bale: AvaFormBit) {}
}

export const CREATE_DRAGABLE = "[Open action] Create Dragable";
export class CreateDragable implements Action {
  readonly type = CREATE_DRAGABLE;
  constructor(public bale: OpenBit) {}
}

export const WRITE_NAV_LIST = "[Open action] Write Nav List";
export class WriteNavList implements Action {
  readonly type = WRITE_NAV_LIST;
  constructor(public bale: OpenBit) {}
}

export const WRITE_DRAG_FILE = "[Open action] Write Drag File";
export class WriteDragFile implements Action {
  readonly type = WRITE_DRAG_FILE;
  constructor(public bale: FileBit) {}
}

export const WRITE_NAV_DEX = "[Open action] Write Nav Dex";
export class WriteNavDex implements Action {
  readonly type = WRITE_NAV_DEX;
  constructor(public bale: number) {}
}

export const UPDATE_NAV = "[Open action] Update Nav";
export class UpdateNav implements Action {
  readonly type = UPDATE_NAV;
  constructor(public bale: OpenBit) {}
}

export const OPEN_OPEN = "[Open action] Waking Open";
export class Open implements Action {
  readonly type = OPEN_OPEN;
  constructor(public bale: OpenBit) {}
}

export type Actions =
  | WriteGleam
  | RemoveAllListeners
  | CreateListener
  | WriteCurrentNom
  | UpdateForm
  | WriteInputBeeing
  | WriteInputName
  | CreateAvaForm
  | WriteDragFile
  | CreateDragable
  | WriteNavList
  | Open
  | UpdateNav
  | WriteNavDex
  | RemoveDragable;
