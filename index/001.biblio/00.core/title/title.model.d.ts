import Title from "./fce/Title.interface";
import TitleBit from "./fce/title.bit.interface";
import Link from "../interface/link.interface";
import SizeBit from "./fce/size.bit.interface";
import GamePadAction from "./fce/game-pad.bit.interface";
export declare class TitleModel implements Title {
    idx: string;
    titleBit: TitleBit;
    size: SizeBit;
    padValue: GamePadAction;
    path: Link;
    count: number;
}
