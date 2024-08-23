import { Action } from "../00.core/interface/action.interface";
import GlopBit from "./fce/glop.bit";
import FileBit from "./fce/file.bit";
import Avatar from "../00.core/form/avatar.form";
import AvaColorBit from "001.gleam/00.core/interface/ava/ava.color.bit";
import LexBit from "./fce/lex.bit ";

export const CREATE_GOOGLE_LEX = "[Glop Action] Create Google Lex";
export class CreateGoogleLex implements Action {
  readonly type = CREATE_GOOGLE_LEX;
  constructor(public bale: LexBit) {}
}

export const CREATE_RAPIDWORD_LEX = "[Glop Action] Create Rapid Word Lex";
export class CreateRapidWordLex implements Action {
  readonly type = CREATE_RAPIDWORD_LEX;
  constructor(public bale: LexBit) {}
}

export const CREATE_WORDNET_LEX = "[Glop Action] Create Wordnet Lex";
export class CreateWordNetLex implements Action {
  readonly type = CREATE_WORDNET_LEX;
  constructor(public bale: LexBit) {}
}

export const CREATE_URBAN_LEX = "[Glop Action] Create Urban Lex";
export class CreateUrbanLex implements Action {
  readonly type = CREATE_URBAN_LEX;
  constructor(public bale: LexBit) {}
}

export const FORMAT_LINE = "[Glop Action] Format Line";
export class FormatLine implements Action {
  readonly type = FORMAT_LINE;
  constructor(public bale: GlopBit) {}
}

export const SAVE_TERM = "[Glop Action] Save Term";
export class SaveTerm implements Action {
  readonly type = SAVE_TERM;
  constructor(public bale: LexBit) {}
}

export const INIT_AVATAR = "[Glop Action] Init Avatar";
export class InitAvatar implements Action {
  readonly type = INIT_AVATAR;
  constructor(public bale: GlopBit) {}
}

export const WRITE_LEXICON_TERM = "[Glop Action] Write Lexicon Term";
export class WriteLexiconTerm implements Action {
  readonly type = WRITE_LEXICON_TERM;
  constructor(public bale: GlopBit) {}
}

export const READ_LEXICON_LIST = "[Glop Action] Read Lexicon List";
export class ReadLexiconList implements Action {
  readonly type = READ_LEXICON_LIST;
  constructor(public bale: GlopBit) {}
}

export const OPEN_FORM_FILE_FIN = "[Glop Action] Open Form File Fin List";
export class OpenFormFileFinList implements Action {
  readonly type = OPEN_FORM_FILE_FIN;
  constructor(public bale: GlopBit) {}
}

export const COPY_FORM_FILE_FIN_LIST = "[Glop Action] Copy Form File Fin List";
export class CopyFormFileFinList implements Action {
  readonly type = COPY_FORM_FILE_FIN_LIST;
  constructor(public bale: GlopBit) {}
}

export const FETCH_FORM_FILE_LIST = "[Glop Action] Fetch Form File List";
export class FetchFormFileList implements Action {
  readonly type = FETCH_FORM_FILE_LIST;
  constructor(public bale: GlopBit) {}
}

export const CREATE_TERM = "[Glop Action] Create Term";
export class CreateTerm implements Action {
  readonly type = CREATE_TERM;
  constructor(public bale: GlopBit) {}
}

export const ADD_FORM = "[Glop Action] Add Form";
export class AddForm implements Action {
  readonly type = ADD_FORM;
  constructor(public bale: GlopBit) {}
}

export const UPDATE_AVA = "[Glop Action] Update Avatar";
export class UpdateAva implements Action {
  readonly type = UPDATE_AVA;
  constructor(public bale: Avatar) {}
}

export const CREATE_AVA = "[Glop Action] Create Avatar";
export class CreateAva implements Action {
  readonly type = CREATE_AVA;
  constructor(public bale: GlopBit) {}
}

export const CREATE_NOM = "[Glop Action] Create Nom";
export class CreateNom implements Action {
  readonly type = CREATE_NOM;
  constructor(public bale: GlopBit) {}
}

export const UPDATE_AVA_COLOR = "[Glop Action] Update Ava Color";
export class UpdateAvaColor implements Action {
  readonly type = UPDATE_AVA_COLOR;
  constructor(public bale: AvaColorBit) {}
}

export const MAP_FORM = "[Glop Action] Map Form";
export class MapForm implements Action {
  readonly type = MAP_FORM;
  constructor(public bale: FileBit) {}
}

export const MAP_COLOR = "[Glop Action] Map Color";
export class MapColor implements Action {
  readonly type = MAP_COLOR;
  constructor(public bale: FileBit) {}
}

export const INIT_GLOP = "[Glop Action] Init Glop";
export class GlopInit implements Action {
  readonly type = INIT_GLOP;
  constructor(public bale: GlopBit) {}
}

export const AWAKE_GLOP = "[Glop Action] Awake Glop";
export class AwakeGlop implements Action {
  readonly type = AWAKE_GLOP;
  constructor(public bale: GlopBit) {}
}

export const GLOP_OPEN = "[Glop Action] Open Glop";
export class Glop implements Action {
  readonly type = GLOP_OPEN;
  constructor(public bale: GlopBit) {}
}

export const WRITE_BITS = "[Glop Action] Write Bits";
export class WriteBits implements Action {
  readonly type = WRITE_BITS;
  constructor(public bale: GlopBit) {}
}

export const WRITE_NAMES = "[Glop Action] Write Names";
export class WriteNames implements Action {
  readonly type = WRITE_NAMES;
  constructor(public bale: GlopBit) {}
}

export const WRITE_NOMS = "[Glop Action] Write Noms";
export class WriteNoms implements Action {
  readonly type = WRITE_NOMS;
  constructor(public bale: GlopBit) {}
}

export const WRITE_NOMS_OPEN = "[Glop Action] Write Noms Open";
export class WriteNomsOpen implements Action {
  readonly type = WRITE_NOMS_OPEN;
  constructor(public bale: GlopBit) {}
}

export const WRITE_COLORS = "[Glop Action] Write Colors";
export class WriteColors implements Action {
  readonly type = WRITE_COLORS;
  constructor(public bale: GlopBit) {}
}

export const WRITE_BEEING = "[Glop Action] Write Beeing";
export class WriteBeeing implements Action {
  readonly type = WRITE_BEEING;
  constructor(public bale: GlopBit) {}
}

export const WRITE_SHAPES = "[Glop Action] Write Shapes";
export class WriteShapes implements Action {
  readonly type = WRITE_SHAPES;
  constructor(public bale: GlopBit) {}
}

export const WRITE_PATTERN = "[Glop Action] Write Pattern";
export class WriteSPattern implements Action {
  readonly type = WRITE_PATTERN;
  constructor(public bale: GlopBit) {}
}

export type Actions =
  | CreateGoogleLex
  | CreateRapidWordLex
  | CreateWordNetLex
  | CreateUrbanLex
  | FormatLine
  | SaveTerm
  | InitAvatar
  | OpenFormFileFinList
  | CopyFormFileFinList
  | WriteLexiconTerm
  | ReadLexiconList
  | FetchFormFileList
  | CreateTerm
  | AddForm
  | MapForm
  | UpdateAvaColor
  | UpdateAva
  | CreateAva
  | CreateNom
  | MapColor
  | GlopInit
  | AwakeGlop
  | Glop
  | WriteBits
  | WriteNames
  | WriteNoms
  | WriteColors
  | WriteBeeing
  | WriteShapes
  | WriteSPattern
  | WriteNomsOpen;
