import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../effect.action";

import ProjectBit from "../fce/project.bit";

export default class ProjectSupportArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }
}
