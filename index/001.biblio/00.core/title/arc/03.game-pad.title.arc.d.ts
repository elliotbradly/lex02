import Arc from "../../form/arc.form";
import State from "../../state";
import GamePadAction from "../fce/game-pad.bit.interface";
export default class GamePadArc extends Arc {
    private state;
    private path;
    constructor(state: State);
    read: (dat: any) => void;
    list: (dat: any) => void;
    update: (dat: GamePadAction) => void;
    create: (dat: any) => void;
    delete: (dat: any) => void;
}
