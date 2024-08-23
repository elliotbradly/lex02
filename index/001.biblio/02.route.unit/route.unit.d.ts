import RoutingUnit from "./arc/00.routing.route";
import Line from "../00.core/line";
import State from "../00.core/state";
export default class RouteUnit {
    routing: RoutingUnit;
    constructor(router: Line, state: State);
}
