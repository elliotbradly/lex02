import { ScreenModel } from "../screen.model";
import Screen from "../fce/screen.interface";
import State from "../../00.core/state";
import ScreenBit from "../fce/screen.bit";

export const writeColors = (cpy: ScreenModel) => {
  if (cpy.writeColors == null) cpy.writeColors = false;
  cpy.writeColors = true;
  cpy.writeColors = false;

  return cpy;
};

export const writeNow = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
  cpy.now = bal.now;
  return cpy;
};

export const writeScreen = (cpy: ScreenModel, bal: Screen, ste: State) => {
  return cpy;
};
