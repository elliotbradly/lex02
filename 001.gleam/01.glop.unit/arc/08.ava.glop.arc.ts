import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import Avatar from "001.gleam/00.core/form/avatar.form";

export default class AvaArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: string[]) => {
    this.path.move(this.state, Act.INIT_AVATAR, dat);
  };

  create = (dat: string[]) => {
    this.path.move(this.state, Act.CREATE_AVA, dat);
  };

  update = (dat: Avatar) => {
    this.path.move(this.state, Act.UPDATE_AVA, dat);
  };
}
