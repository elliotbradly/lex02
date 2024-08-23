import { Action } from "../00.core/interface/action.interface";
import SupportBit from "./fce/effect.bit.interface";
import LineCountBit from "./fce/line-count.bit";
import ResponseBit from "./fce/response.bit";
import CommandBit from "./fce/command.bit";
import SenderBit from "./fce/sender.bit";
import ProjectBit from "./fce/project.bit";

export const QUE_TERMINAL = "[title action] Delete Terminal";
export class QueTerminal implements Action {
  readonly type = QUE_TERMINAL;
  constructor(public bale: ProjectBit) {}
}

export const OPEN_PROJECT = "[title action] Open Project";
export class OpenProject implements Action {
  readonly type = OPEN_PROJECT;
  constructor(public bale: ProjectBit) {}
}

export const UPDATE_PROJECT = "[title action] Update Project";
export class UpdateProject implements Action {
  readonly type = UPDATE_PROJECT;
  constructor(public bale: ProjectBit) {}
}

export const WRITE_PROJECT = "[title action] Write Project";
export class WriteProject implements Action {
  readonly type = WRITE_PROJECT;
  constructor(public bale: ProjectBit) {}
}

export const WRITE_SENDER = "[title action] Write Sender";
export class WriteSender implements Action {
  readonly type = WRITE_SENDER;
  constructor(public bale: SenderBit) {}
}

export const WRITE_RESPONSE = "[title action] Write Response";
export class WriteResponse implements Action {
  readonly type = WRITE_RESPONSE;
  constructor(public bale: ResponseBit) {}
}

export const WRITE_COMMAND = "[title action] Write Command";
export class WriteCommand implements Action {
  readonly type = WRITE_COMMAND;
  constructor(public bale: CommandBit) {}
}

export const WRITE_LINE_COUNT = "[Effect action] Write Line Count";
export class WriteLineCount implements Action {
  readonly type = WRITE_LINE_COUNT;
  constructor(public bale: LineCountBit) {}
}

export const SUPPORT_OPEN = "[Effect action] Waking Effect";
export class Effect implements Action {
  readonly type = SUPPORT_OPEN;
  constructor(public bale: SupportBit) {}
}

export type Actions =
  | QueTerminal
  | OpenProject
  | UpdateProject
  | WriteProject
  | WriteSender
  | WriteCommand
  | WriteResponse
  | WriteLineCount
  | Effect;
