import TitleBit from "./title.bit.interface";
import SizeBit from "./size.bit.interface";
import GamePadAction from "./game-pad.bit.interface";

export default interface Title {
  idx: string;
  titleBit: TitleBit;
  size: SizeBit;
  padValue: GamePadAction;
}
