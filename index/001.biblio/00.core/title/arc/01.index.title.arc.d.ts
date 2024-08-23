import Arc from "../../form/arc.form";
import State from "../../state";
import TitleBit from "../fce/title.bit.interface";
import ResizeBit from "../fce/resize.bit.interface";
export default class IndexTitleArc extends Arc {
    private state;
    private path;
    private title;
    constructor(state: State);
    list: (dat: any) => void;
    create: (dat: TitleBit) => void;
    update: (dat: ResizeBit) => void;
    delete: (dat: any) => void;
}
