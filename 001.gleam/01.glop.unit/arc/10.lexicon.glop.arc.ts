import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import Avatar from "001.gleam/00.core/form/avatar.form";
import GlopBit from "../fce/glop.bit";

export default class LexiconArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat: string[]) => {
    this.path.move(this.state, Act.READ_LEXICON_LIST, dat);
  };

  create = (dat: string[]) => {
    this.path.move(this.state, Act.CREATE_TERM, dat);
  };
}
