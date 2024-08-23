import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import CohesionProcess from "../prc/cohesion.process";

import { Inject } from "typescript-ioc";

import CommandBit from "../fce/command.bit";

export default class CohesionArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private cohesion: CohesionProcess;

  constructor(private state: State) {
    super(state);
  }

  write = (dat: CommandBit) => this.cohesion.publish(dat.idx);
  update = (dat: CommandBit) => this.cohesion.update(dat.idx);
}
