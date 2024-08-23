import { Singleton } from "typescript-ioc";
import RoutingUnit from "./arc/00.routing.begin";
import Line from "../00.core/line";
import State from "../00.core/state";

@Singleton
export default class BeginUnit {
 routing: RoutingUnit;

 constructor(router: Line, state: State) {
 //console.log("construnct sim unit " + this.router);
 this.routing = new RoutingUnit(router, state);
 }
}
