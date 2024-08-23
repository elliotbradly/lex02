import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../screen.action";
import ScreenBit from "../fce/screen.bit";


export default class IndexScreenArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 read = dat => {
 //console.log("do something good");
 };

 list = dat => {};

 create = (dat:ScreenBit ) => this.path.move(this.state, Act.SCREEN_OPEN, dat);

 update = dat => {};

 delete = dat => {};
}
