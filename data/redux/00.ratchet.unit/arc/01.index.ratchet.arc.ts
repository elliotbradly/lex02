import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../ratchet.action";
import RatchetBit from "../fce/ratchet.bit";


export default class IndexRatchetArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 read = dat => {
 //console.log("do something good");
 };

 list = dat => {};

 create = (dat:RatchetBit ) => this.path.move(this.state, Act.RATCHET_OPEN, dat);

 update = dat => {};

 delete = dat => {};
}
