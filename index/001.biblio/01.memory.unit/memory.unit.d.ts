import RoutingUnit from "./arc/00.routing.memory";
import Line from "../00.core/line";
import State from "../00.core/state";
export default class MemoryUnit {
    routing: RoutingUnit;
    constructor(router: Line, state: State);
}
