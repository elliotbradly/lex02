import * as clone from "clone-deep";
import * as Act from "./flow.action";
import { FlowModel } from "./flow.model";
import * as Buzz from "./flow.buzzer";
import State from "../00.core/state";

export function reducer(model: FlowModel = new FlowModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.FLOW_OPEN:
 return Buzz.writeFlow(clone(model), act.bale, state);

 default:
 return model;
 }
}
