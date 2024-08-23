import { TitleModel } from "../title.model";
import Link from "../../interface/link.interface";
import ResizeBit from "../fce/resize.bit.interface";
import GamePadAction from "../fce/game-pad.bit.interface";
export declare const resizeTitle: (cpy: TitleModel, bal: ResizeBit) => void;
export declare const writeCount: (cpy: TitleModel) => TitleModel;
export declare const updatePath: (cpy: TitleModel, bale: Link) => TitleModel;
export declare const writeGamePad: (cpy: TitleModel, bale: GamePadAction) => TitleModel;
