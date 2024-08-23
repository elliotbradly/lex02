import { Action } from "../00.core/interface/action.interface";
import ScreenBit from "./fce/screen.bit";
import FormAvaBit from "./fce/form.ava.bit";
import FileBit from "990.surface/01.open.unit/fce/file.bit";

export const INIT_LEXICON = "[Screen Action] INIT_LEXICON";
export class InitLexicon implements Action {
  readonly type = INIT_LEXICON;
  constructor(public bale: FileBit) {}
}

export const INIT_FORM_LIST = "[Screen Action] INIT_FORM_LIST";
export class InitFormList implements Action {
  readonly type = INIT_FORM_LIST;
  constructor(public bale: FileBit) {}
}

export const READ_HUNT = "[Screen Action] Read Hunt";
export class ReadHunt implements Action {
  readonly type = READ_HUNT;
  constructor(public bale: ScreenBit) {}
}

export const UPDATE_HUNT = "[Open action] Update Hunt";
export class UpdateHunt implements Action {
  readonly type = UPDATE_HUNT;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_HUNT_SUB_NAV_DEX = "[Open action] Write Hunt Sub Nav Dex";
export class WriteHuntSubNavDex implements Action {
  readonly type = WRITE_HUNT_SUB_NAV_DEX;
  constructor(public bale: number) {}
}

export const UPDATE_HUNT_SUB_NAV = "[Open action] Update Hunt Sub Nav";
export class UpdateHuntSubNav implements Action {
  readonly type = UPDATE_HUNT_SUB_NAV;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_NAME = "[Open action] Write Avatar Name";
export class WriteAvatarName implements Action {
  readonly type = WRITE_AVATAR_NAME;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_NOM = "[Open action] Write Avatar Nom";
export class WriteAvatarNom implements Action {
  readonly type = WRITE_AVATAR_NOM;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_COLOR = "[Open action] Write Avatar Color";
export class WriteAvatarColor implements Action {
  readonly type = WRITE_AVATAR_COLOR;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_BEEING = "[Open action] Write Avatar Beeing";
export class WriteAvatarBeeing implements Action {
  readonly type = WRITE_AVATAR_BEEING;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_SHAPE = "[Open action] Write Avatar Shape";
export class WriteAvatarShape implements Action {
  readonly type = WRITE_AVATAR_SHAPE;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_AVATAR_PATTERN = "[Open action] Write Avatar Pattern";
export class WriteAvatarPattern implements Action {
  readonly type = WRITE_AVATAR_PATTERN;
  constructor(public bale: ScreenBit) {}
}

export const UPDATE_AVA_FORM = "[Open action] Update Ava Form";
export class UpdateAvaForm implements Action {
  readonly type = UPDATE_AVA_FORM;
  constructor(public bale: FormAvaBit) {}
}

export const UPDATE_CREATE = "[Open action] Update Create";
export class UpdateCreate implements Action {
  readonly type = UPDATE_CREATE;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_CREATE_SUB_NAV_DEX =
  "[Open action] Write Create Sub Nav Dex";
export class WriteCreateSubNavDex implements Action {
  readonly type = WRITE_CREATE_SUB_NAV_DEX;
  constructor(public bale: number) {}
}

export const UPDATE_CREATE_SUB_NAV = "[Open action] Update Create Sub Nav";
export class UpdateCreateSubNav implements Action {
  readonly type = UPDATE_CREATE_SUB_NAV;
  constructor(public bale: ScreenBit) {}
}

export const CREATE_AVATAR = "[Screen Action] Create Avatar";
export class CreateAvatar implements Action {
  readonly type = CREATE_AVATAR;
  constructor(public bale: ScreenBit) {}
}

export const WRITE_COLORS = "[Screen Action] Write Colors";
export class WriteColors implements Action {
  readonly type = WRITE_COLORS;
  constructor(public bale: ScreenBit) {}
}

export const READ_SHOW = "[Screen Action] Read Show";
export class ReadShow implements Action {
  readonly type = READ_SHOW;
  constructor(public bale: ScreenBit) {}
}

export const READ_EDIT = "[Screen Action] Read Edit";
export class ReadEdit implements Action {
  readonly type = READ_EDIT;
  constructor(public bale: ScreenBit) {}
}

export const READ_CREATE = "[Screen Action] Read Create";
export class ReadCreate implements Action {
  readonly type = READ_CREATE;
  constructor(public bale: ScreenBit) {}
}

export const SCREEN_OPEN = "[Screen Action] Waking Screen";
export class Screen implements Action {
  readonly type = SCREEN_OPEN;
  constructor(public bale: ScreenBit) {}
}

export type Actions =
  | InitLexicon
  | InitFormList
  | WriteAvatarName
  | WriteAvatarNom
  | WriteAvatarColor
  | WriteAvatarBeeing
  | WriteAvatarShape
  | WriteAvatarPattern
  | UpdateAvaForm
  | UpdateCreate
  | WriteCreateSubNavDex
  | UpdateCreateSubNav
  | CreateAvatar
  | WriteColors
  | ReadShow
  | ReadEdit
  | ReadCreate
  | Screen
  | ReadHunt
  | WriteHuntSubNavDex
  | UpdateHuntSubNav
  | UpdateHunt;
