import Arc from "../../form/arc.form";
import State from "../../state";
import PathProcess from "../prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../title.action";
import Title from "../fce/title.interface";
import TitleProcess from "../prc/title.process";

export default class MenuTitleArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private title: TitleProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
    // this.title.menu(this.state, index(this.state));
  };

  list = (dat) => {};

  update = (dat) => {
    //this.path.move(this.state, Act.GRID_MENU_ACTION, dat.value);
  };

  //create = dat => this.path.move(this.state, Act.GRID_MENU, dat);

  delete = (dat) => {};
}
