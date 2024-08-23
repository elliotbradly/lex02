import { Singleton } from "typescript-ioc";
import RoutingUnit from "./arc/00.routing.title";
import Line from "../line";
import State from "../state";

@Singleton
export default class TitleUnit {
  routing: RoutingUnit;

  constructor(router: Line, state: State) {
    this.routing = new RoutingUnit(router, state);
  }
}
