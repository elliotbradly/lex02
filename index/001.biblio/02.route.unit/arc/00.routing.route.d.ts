import Line from "../../00.core/line";
import State from "../../00.core/state";
import IndexArc from "./01.index.route.arc";
export declare const root: string;
export declare const routes: {
    path: string;
    arcType: typeof IndexArc;
    arc: any;
}[];
export default class DisplayRoutingUnit {
    constructor(router: Line, state: State);
}
