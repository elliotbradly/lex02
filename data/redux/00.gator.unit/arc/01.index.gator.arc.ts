import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../gator.action";
import GatorBit from "../fce/gator.bit";


export default class IndexGatorArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 read = dat => {
 //console.log("do something good");
 };

 list = dat => {};

 create = (dat:GatorBit ) => this.path.move(this.state, Act.GATOR_OPEN, dat);

 update = dat => {};

 delete = dat => {};
}
