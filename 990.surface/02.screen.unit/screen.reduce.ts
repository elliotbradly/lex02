import * as clone from "clone-deep";
import * as Act from "./screen.action";
import { ScreenModel } from "./screen.model";
import * as Buzz from "./screen.buzzer";
import State from "../00.core/state";

export function reducer(
  model: ScreenModel = new ScreenModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.INIT_LEXICON:
      return Buzz.initLexicon(clone(model), act.bale, state);

    case Act.INIT_FORM_LIST:
      return Buzz.initFormList(clone(model), act.bale, state);
    case Act.READ_HUNT:
      return Buzz.readHunt(clone(model), act.bale, state);

    case Act.UPDATE_HUNT:
      return Buzz.updateHunt(clone(model), act.bale, state);

    case Act.WRITE_HUNT_SUB_NAV_DEX:
      return Buzz.writeHuntSubNavDex(clone(model), act.bale, state);

    case Act.UPDATE_HUNT_SUB_NAV:
      return Buzz.updateHuntSubNav(clone(model), act.bale, state);

    case Act.WRITE_AVATAR_NAME:
      return Buzz.writeAvatarName(clone(model), act.bale);

    case Act.WRITE_AVATAR_NOM:
      return Buzz.writeAvatarNom(clone(model), act.bale);

    case Act.WRITE_AVATAR_COLOR:
      return Buzz.writeAvatarColor(clone(model), act.bale);

    case Act.WRITE_AVATAR_BEEING:
      return Buzz.writeAvatarBeeing(clone(model), act.bale);

    case Act.WRITE_AVATAR_SHAPE:
      return Buzz.writeAvatarShapes(clone(model), act.bale);

    case Act.WRITE_AVATAR_PATTERN:
      return Buzz.writeAvatarPattern(clone(model), act.bale);

    case Act.UPDATE_AVA_FORM:
      return Buzz.updateAvaForm(clone(model), act.bale, state);

    case Act.UPDATE_CREATE:
      return Buzz.updateCreate(clone(model), act.bale, state);

    case Act.UPDATE_CREATE_SUB_NAV:
      return Buzz.updateCreateSubNav(clone(model), act.bale, state);

    case Act.WRITE_CREATE_SUB_NAV_DEX:
      return Buzz.writeCreateSubNavDex(clone(model), act.bale, state);

    case Act.CREATE_AVATAR:
      return Buzz.createAvatar(clone(model), act.bale, state);

    case Act.READ_CREATE:
      return Buzz.readCreate(clone(model), act.bale, state);

    case Act.READ_EDIT:
      return Buzz.readEdit(clone(model), act.bale, state);

    case Act.READ_SHOW:
      return Buzz.readShow(clone(model), act.bale, state);

    case Act.WRITE_COLORS:
      return Buzz.writeColors(clone(model));

    case Act.SCREEN_OPEN:
      return Buzz.writeScreen(clone(model), act.bale, state);

    default:
      return model;
  }
}
