import * as clone from "clone-deep";
import * as Act from "./screen.action";
import { ScreenModel } from "./screen.model";
import * as Buzz from "./screen.buzzer";
import State from "../00.core/state";

export function reducer(model: ScreenModel = new ScreenModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 case Act.SCREEN_OPEN:
 return Buzz.writeScreen(clone(model), act.bale, state);

 default:
 return model;
 }
}
