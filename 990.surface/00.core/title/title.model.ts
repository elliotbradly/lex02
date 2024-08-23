import Title from "./fce/Title.interface";
import TitleBit from "./fce/title.bit.interface";
import Link from "../interface/link.interface";
import SizeBit from "./fce/size.bit.interface";
import GamePadAction from "./fce/game-pad.bit.interface";

export class TitleModel implements Title {
  idx: string = "title";
  titleBit: TitleBit = { idx: "titleBit" };
  size: SizeBit = { width: 0, height: 0 };
  padValue: GamePadAction = { idx: "", act: "" };
  path: Link = null;
  count: number = 0; // utility for testing things
}
