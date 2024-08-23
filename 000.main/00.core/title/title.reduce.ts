import * as clone from "clone-deep";
import * as Act from "./title.action";
import { TitleModel } from "./title.model";
import * as Buzz from "./title.buzzer";
import State from "../state";

export function reducer(
  model: TitleModel = new TitleModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.PAD_PRESS:
      return Buzz.writeGamePad(clone(model), act.bale);

    case Act.COUNT:
      return Buzz.writeCount(clone(model));

    case Act.UPDATE_PATH:
      return Buzz.updatePath(clone(model), act.bale);

    case Act.RESIZE:
      return Buzz.resizeTitle(clone(model), act.bale);

    default:
      return model;
  }
}
