import Arc from "../../form/arc.form";
import State from "../../state";
export default class MenuTitleArc extends Arc {
    private state;
    private path;
    private title;
    constructor(state: State);
    read: (dat: any) => void;
    list: (dat: any) => void;
    update: (dat: any) => void;
    delete: (dat: any) => void;
}
