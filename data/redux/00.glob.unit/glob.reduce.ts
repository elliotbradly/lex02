import * as clone from "clone-deep";
import * as Act from "./glob.action";
import { GlobModel } from "./glob.model";
import * as Buzz from "./glob.buzzer";
import State from "../00.core/state";

export function reducer(model: GlobModel = new GlobModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.GLOB_OPEN:
 return Buzz.writeGlob(clone(model), act.bale, state);

 default:
 return model;
 }
}
