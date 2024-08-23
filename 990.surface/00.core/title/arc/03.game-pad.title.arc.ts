import Arc from "../../form/arc.form";
import State from "../../state";
import * as Act from "../title.action";
import PathProcess from "../prc/path.process";
import { Inject } from "typescript-ioc";
import GamePadAction from "../fce/game-pad.bit.interface";

export default class GamePadArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
  };

  list = (dat) => {};

  update = (dat: GamePadAction) =>
    this.path.move(this.state, Act.PAD_PRESS, dat);

  create = (dat) => {
    //this.state.dispatch({ type: Act.INIT_BEEING });
  };

  delete = (dat) => {};
}
