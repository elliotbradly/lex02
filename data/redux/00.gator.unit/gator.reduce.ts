import * as clone from "clone-deep";
import * as Act from "./gator.action";
import { GatorModel } from "./gator.model";
import * as Buzz from "./gator.buzzer";
import State from "../00.core/state";

export function reducer(model: GatorModel = new GatorModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.GATOR_OPEN:
 return Buzz.writeGator(clone(model), act.bale, state);

 default:
 return model;
 }
}
