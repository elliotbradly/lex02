import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";

export default class NomArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  update = (dat: GlopBit) => {
    console.log("you like");

    this.path.move(this.state, Act.WRITE_NOMS_OPEN, dat);
  };

  write = (dat: GlopBit) => this.path.move(this.state, Act.WRITE_NOMS, dat);

  create = (dat: GlopBit) => this.path.move(this.state, Act.CREATE_NOM, dat);
}
