import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import RouteBit from "../fce/route.bit";
export default class IndexRouteArc extends Arc {
    private state;
    private path;
    constructor(state: State);
    init: (dat: RouteBit) => void;
    awake: (dat: RouteBit) => void;
}
