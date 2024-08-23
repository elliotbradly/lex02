import * as clone from "clone-deep";
import * as Act from "./begin.action";
import { BeginModel } from "./begin.model";
import * as Buzz from "./begin.buzzer";
import State from "../00.core/state";

export function reducer(model: BeginModel = new BeginModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.BEGIN_OPEN:
 return Buzz.writeBegin(clone(model), act.bale, state);

 default:
 return model;
 }
}
