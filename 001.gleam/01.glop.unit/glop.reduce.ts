import * as clone from "clone-deep";
import * as Act from "./glop.action";
import { GlopModel } from "./glop.model";
import * as Buzz from "./glop.buzzer";
import State from "../00.core/state";

export function reducer(
  model: GlopModel = new GlopModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.CREATE_GOOGLE_LEX:
      return Buzz.createGoogleLex(clone(model), act.bale, state);
    case Act.CREATE_RAPIDWORD_LEX:
      return Buzz.createRapidWordLex(clone(model), act.bale, state);
    case Act.CREATE_WORDNET_LEX:
      return Buzz.createWordNet(clone(model), act.bale, state);
    case Act.CREATE_URBAN_LEX:
      return Buzz.createUrbanLex(clone(model), act.bale, state);
    case Act.FORMAT_LINE:
      return Buzz.formatLine(clone(model), act.bale);
    case Act.SAVE_TERM:
      return Buzz.saveTerm(clone(model), act.bale, state);
    case Act.INIT_AVATAR:
      return Buzz.initAvatar(clone(model), act.bale, state);
    case Act.OPEN_FORM_FILE_FIN:
      return Buzz.openFormFinFiles(clone(model), act.bale);
    case Act.COPY_FORM_FILE_FIN_LIST:
      return Buzz.copyFormFinFiles(clone(model), act.bale);
    case Act.WRITE_LEXICON_TERM:
      return Buzz.writeLexiconTerm(clone(model), act.bale);
    case Act.READ_LEXICON_LIST:
      return Buzz.readLexiconList(clone(model), act.bale, state);
    case Act.FETCH_FORM_FILE_LIST:
      return Buzz.fetchFormFiles(clone(model), act.bale);
    case Act.CREATE_TERM:
      return Buzz.createTerm(clone(model), act.bale, state);
    case Act.ADD_FORM:
      return Buzz.addForm(clone(model), act.bale, state);
    case Act.MAP_FORM:
      return Buzz.mapForm(clone(model), act.bale, state);
    case Act.UPDATE_AVA_COLOR:
      return Buzz.updateAvaColor(clone(model), act.bale, state);
    case Act.UPDATE_AVA:
      return Buzz.updateAva(clone(model), act.bale, state);
    case Act.CREATE_AVA:
      return Buzz.createAva(clone(model), act.bale, state);
    case Act.MAP_COLOR:
      return Buzz.mapColor(clone(model), act.bale, state);
    case Act.CREATE_NOM:
      return Buzz.createNom(clone(model), act.bale, state);
    case Act.WRITE_BITS:
      return Buzz.writeBits(clone(model), act.bale);
    case Act.WRITE_NAMES:
      return Buzz.writeNames(clone(model), act.bale);
    case Act.WRITE_NOMS:
      return Buzz.writeNoms(clone(model), act.bale);
    case Act.WRITE_COLORS:
      return Buzz.writeColors(clone(model), act.bale);
    case Act.WRITE_BEEING:
      return Buzz.writeBeeing(clone(model), act.bale);
    case Act.WRITE_SHAPES:
      return Buzz.writeShapes(clone(model), act.bale);
    case Act.WRITE_PATTERN:
      return Buzz.writePatterns(clone(model), act.bale);
    case Act.WRITE_NOMS_OPEN:
      return Buzz.writeNomOpen(clone(model), act.bale);
    case Act.INIT_GLOP:
      return Buzz.initGlob(clone(model), act.bale);

    default:
      return model;
  }
}
