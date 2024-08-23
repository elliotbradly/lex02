import Arc from "../../form/arc.form";
import State from "../../state";
import PathProcess from "../prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../title.action";
import TitleBit from "../fce/title.bit.interface";
import TitleProcess from "../prc/title.process";
import ResizeBit from "../fce/resize.bit.interface";

export default class IndexTitleArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private title: TitleProcess;

  constructor(private state: State) {
    super(state);
  }

  list = (dat) => this.path.move(this.state, Act.COUNT, dat);

  create = (dat: TitleBit) => this.path.move(this.state, Act.TITLE_OPEN, dat);

  update = (dat: ResizeBit) => this.path.move(this.state, Act.RESIZE, dat);

  delete = (dat) => {};
}
