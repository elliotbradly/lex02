import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../effect.action";

import SupportBit from "../fce/effect.bit.interface";
import LineCountProcess from "../prc/line-count.process";
import LineCountBit from "../fce/line-count.bit";
import CommandBit from "../fce/command.bit";
import SenderBit from "../fce/sender.bit";

export default class IndexSupportArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private lineCount: LineCountProcess;

  constructor(private state: State) {
    super(state);
  }

  write = (dat: CommandBit) =>
    this.path.move(this.state, Act.WRITE_COMMAND, dat);

  update = (dat: SenderBit) =>
    this.path.move(this.state, Act.WRITE_SENDER, dat);

  delete = (dat) => {};
}
