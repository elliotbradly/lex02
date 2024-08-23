import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../screen.action";
import ScreenBit from "../fce/screen.bit";
import FormAvaBit from "../fce/form.ava.bit";

export default class CreateScreenArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => this.path.move(this.state, Act.READ_CREATE, dat);

  update = (dat: FormAvaBit) => {
    this.path.move(this.state, Act.UPDATE_AVA_FORM, dat);
  };
}
