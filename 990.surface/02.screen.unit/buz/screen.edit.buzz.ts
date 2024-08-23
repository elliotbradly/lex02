import { ScreenModel } from "../screen.model";
import Screen from "../fce/screen.interface";
import State from "../../00.core/state";
import CreateBit from "../fce/create.bit";

var template: string = ` 
<div> edit
</div>`;

export const readEdit = (cpy: ScreenModel, bal: CreateBit, ste: State) => {
  cpy.now = template;
  document.getElementById("content").innerHTML = cpy.now;

  return cpy;
};
