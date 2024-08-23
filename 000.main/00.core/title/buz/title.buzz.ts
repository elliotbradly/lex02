import { TitleModel } from "../title.model";
import Title from "../fce/title.interface";
import Link from "../../interface/link.interface";
import ResizeBit from "../fce/resize.bit.interface";
import TitleBit from "../fce/title.bit.interface";
import GamePadAction from "../fce/game-pad.bit.interface";

export const resizeTitle = (cpy: TitleModel, bal: ResizeBit) => {
  delete cpy.size;
  cpy.size = { width: bal.width, height: bal.height };
};

export const writeCount = (cpy: TitleModel) => {
  cpy.count += 1;
  return cpy;
};

export const updatePath = (cpy: TitleModel, bale: Link) => {
  cpy.path = bale;
  return cpy;
};

export const writeGamePad = (cpy: TitleModel, bale: GamePadAction) => {
  cpy.padValue = null;
  cpy.padValue = bale;
  return cpy;
};
