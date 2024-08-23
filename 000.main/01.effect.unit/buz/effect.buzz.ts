import { EffectModel } from "../effect.model";
import * as Act from "../effect.action";
import * as TitleAct from "../../00.core/title/title.action";
import Effect from "../fce/effect.interface";
import State from "../../00.core/state";
import LineCountBit from "../fce/line-count.bit";
import { TitleModel } from "000.main/00.core/title/title.model";
import CommandBit from "../fce/command.bit";
import ResponseBit from "../fce/response.bit";
import SenderBit from "../fce/sender.bit";
import * as Moment from "moment";

export const writeSender = (cpy: EffectModel, bal: SenderBit) => {
  delete cpy.sender;
  cpy.sender = bal;
  cpy.sender.idx = Moment().valueOf();
  return cpy;
};

export const writeCommand = (cpy: EffectModel, bal: CommandBit) => {
  delete cpy.command;
  cpy.command = bal;
  cpy.command.idx = Moment().valueOf();
  return cpy;
};

export const writeResponse = (cpy: EffectModel, bal: ResponseBit) => {
  delete cpy.response;
  cpy.response = bal;
  cpy.response.idx = Moment().valueOf();
  return cpy;
};

export const writeLineCount = (
  cpy: EffectModel,
  bal: LineCountBit,
  ste: State
) => {
  cpy.lineCount = bal;

  console.log("sending out a  response " + JSON.stringify(cpy));

  ste.dispatch({
    type: Act.WRITE_RESPONSE,
    bale: { dat: cpy.lineCount },
  });
  return cpy;
};

export const writeSupport = (cpy: EffectModel, bal: Effect, ste: State) => {
  return cpy;
};
