import * as clone from "clone-deep";
import * as Act from "./effect.action";
import { EffectModel } from "./effect.model";
import * as Buzz from "./effect.buzzer";
import State from "../00.core/state";

export function reducer(
  model: EffectModel = new EffectModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.WRITE_LINE_COUNT:
      return Buzz.writeLineCount(clone(model), act.bale, state);

    case Act.SUPPORT_OPEN:
      return Buzz.writeSupport(clone(model), act.bale, state);

    case Act.WRITE_COMMAND:
      return Buzz.writeCommand(clone(model), act.bale);

    case Act.WRITE_RESPONSE:
      return Buzz.writeResponse(clone(model), act.bale);

    case Act.WRITE_SENDER:
      return Buzz.writeSender(clone(model), act.bale);

    case Act.WRITE_PROJECT:
      return Buzz.writeProject(clone(model), act.bale);

    case Act.OPEN_PROJECT:
      return Buzz.openProject(clone(model), act.bale);

    case Act.UPDATE_PROJECT:
      return Buzz.updateProject(clone(model), act.bale);

    case Act.QUE_TERMINAL:
      return Buzz.queTerminal(clone(model), act.bale);

    default:
      return model;
  }
}
