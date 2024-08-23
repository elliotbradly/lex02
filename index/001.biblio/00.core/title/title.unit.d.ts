import RoutingUnit from "./arc/00.routing.title";
import Line from "../line";
import State from "../state";
export default class TitleUnit {
    routing: RoutingUnit;
    constructor(router: Line, state: State);
}
