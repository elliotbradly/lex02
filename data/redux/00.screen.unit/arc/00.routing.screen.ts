import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.screen.arc";

export const root: string = "screen";

export const routes = [
 {
 path: "index",
 arcType: IndexArc,
 arc: null
 }
];

export default class DisplayRoutingUnit {
 constructor(router: Line, state: State) {
 routes.forEach(a => {
 a.path = root + "/" + a.path;
 a.arc = new a.arcType(state);
 router.register(a);
 });
 }
}
