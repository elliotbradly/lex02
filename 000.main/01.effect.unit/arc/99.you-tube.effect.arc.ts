import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../effect.action";

import SupportBit from "../fce/effect.bit.interface";
import YouTubeProcess from "../prc/you-tube.process";
import CommandBit from "../fce/command.bit";
import SenderBit from "../fce/sender.bit";

export default class YoutubeSupportArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private tube: YouTubeProcess;

  constructor(private state: State) {
    super(state);
  }

  write = (dat: CommandBit) => this.tube.create("../../");

  delete = (dat) => {};
}
