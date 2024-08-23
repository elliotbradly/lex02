import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../open.action";
import OpenBit from "../fce/open.bit";
import AvaFormBit from "../fce/form.beeing";

export default class IndexOpenArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  update = (dat: AvaFormBit) =>
    this.path.move(this.state, Act.UPDATE_FORM, dat);

  create = (dat: OpenBit) =>
    this.path.move(this.state, Act.CREATE_AVA_FORM, dat);
}
