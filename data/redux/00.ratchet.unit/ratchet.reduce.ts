import * as clone from "clone-deep";
import * as Act from "./ratchet.action";
import { RatchetModel } from "./ratchet.model";
import * as Buzz from "./ratchet.buzzer";
import State from "../00.core/state";

export function reducer(model: RatchetModel = new RatchetModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.RATCHET_OPEN:
 return Buzz.writeRatchet(clone(model), act.bale, state);

 default:
 return model;
 }
}
