import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import GlopBit from "../fce/glop.bit";

export default class IndexGlopArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: GlopBit) => this.path.move(this.state, Act.INIT_GLOP, dat);
  awake = (dat: GlopBit) => this.path.move(this.state, Act.AWAKE_GLOP, dat);
}
