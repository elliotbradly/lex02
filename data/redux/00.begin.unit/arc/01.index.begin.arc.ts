import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../begin.action";
import BeginBit from "../fce/begin.bit";


export default class IndexBeginArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 read = dat => {
 //console.log("do something good");
 };

 list = dat => {};

 create = (dat:BeginBit ) => this.path.move(this.state, Act.BEGIN_OPEN, dat);

 update = dat => {};

 delete = dat => {};
}
