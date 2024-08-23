import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../screen.action";
import ScreenBit from "../fce/screen.bit";
import FormAvaBit from "../fce/form.ava.bit";

export default class AvatarScreenArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  update = (dat: ScreenBit) => {
    this.path.move(this.state, Act.WRITE_AVATAR_NOM, dat);
  };
}
