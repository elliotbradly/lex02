import Line from "../../line";
import State from "../../state";
import IndexArc from "./01.index.title.arc";
import MenuArc from "./02.menu.title.arc";
import GamePadArc from "./03.game-pad.title.arc";
export declare const root: string;
export declare const routes: ({
    path: string;
    arcType: typeof IndexArc;
    arc: any;
} | {
    path: string;
    arcType: typeof MenuArc;
    arc: any;
} | {
    path: string;
    arcType: typeof GamePadArc;
    arc: any;
})[];
export default class DisplayRoutingUnit {
    constructor(router: Line, state: State);
}
