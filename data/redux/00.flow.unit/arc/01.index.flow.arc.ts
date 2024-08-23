import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../flow.action";
import FlowBit from "../fce/flow.bit";


export default class IndexFlowArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 read = dat => {
 //console.log("do something good");
 };

 list = dat => {};

 create = (dat:FlowBit ) => this.path.move(this.state, Act.FLOW_OPEN, dat);

 update = dat => {};

 delete = dat => {};
}
