import * as clone from "clone-deep";
import * as Act from "./open.action";
import { OpenModel } from "./open.model";
import * as Buzz from "./open.buzzer";
import State from "../00.core/state";
import { stat } from "fs";

export function reducer(
  model: OpenModel = new OpenModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.WRITE_GLEAM:
      return Buzz.writeGleam(clone(model), act.bale);

    case Act.REMOVE_DRAGABLE:
      return Buzz.removeDragable(clone(model));

    case Act.CREATE_LISTENER:
      return Buzz.createListener(clone(model), act.bale, state);
    case Act.REMOVE_ALL_LISTENERS:
      return Buzz.removeAllListeners(clone(model), act.bale, state);

    case Act.WRITE_CURRENT_NOM:
      return Buzz.writeCurrentNom(clone(model), act.bale);

    case Act.UPDATE_FORM:
      return Buzz.updateForm(clone(model), act.bale, state);

    case Act.WRITE_INPUT_BEEING:
      return Buzz.writeInputBeeing(clone(model), act.bale);

    case Act.WRITE_INPUT_NAME:
      return Buzz.writeInputName(clone(model), act.bale);

    case Act.CREATE_AVA_FORM:
      return Buzz.createForm(clone(model), act.bale, state);

    case Act.WRITE_NAV_LIST:
      return Buzz.writeNavList(clone(model), act.bale, state);

    case Act.WRITE_DRAG_FILE:
      return Buzz.writeDragFile(clone(model), act.bale, state);

    case Act.WRITE_NAV_DEX:
      return Buzz.writeNavDex(clone(model), act.bale, state);

    case Act.CREATE_DRAGABLE:
      return Buzz.createDragable(clone(model), act.bale, state);

    case Act.UPDATE_NAV:
      return Buzz.updateNav(clone(model), act.bale, state);

    case Act.OPEN_OPEN:
      return Buzz.writeOpen(clone(model), act.bale, state);

    default:
      return model;
  }
}
