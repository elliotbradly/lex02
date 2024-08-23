import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import Avatar from "001.gleam/00.core/form/avatar.form";
import GlopBit from "../fce/glop.bit";

export default class FormArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  open = (dat: GlopBit) => {
    this.path.move(this.state, Act.OPEN_FORM_FILE_FIN, dat);
  };

  copy = (dat: GlopBit) => {
    this.path.move(this.state, Act.COPY_FORM_FILE_FIN_LIST, dat);
  };

  fetch = (dat: GlopBit) => {
    this.path.move(this.state, Act.FETCH_FORM_FILE_LIST, dat);
  };

  add = (dat: GlopBit) => {
    this.path.move(this.state, Act.ADD_FORM, dat);
  };

  create = (dat: string[]) => {
    this.path.move(this.state, Act.MAP_FORM, dat);
  };
}
