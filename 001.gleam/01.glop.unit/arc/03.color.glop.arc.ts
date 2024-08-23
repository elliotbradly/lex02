import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../glop.action";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";
import AvaColorBit from "001.gleam/00.core/interface/ava/ava.color.bit";

export default class ColorArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  update = (dat: AvaColorBit) =>
    this.path.move(this.state, Act.UPDATE_AVA_COLOR, dat);
  read = (dat: FileBit) => this.path.move(this.state, Act.MAP_COLOR, dat);
  write = (dat: GlopBit) => this.path.move(this.state, Act.WRITE_COLORS, dat);
}
