import { Action } from "../00.core/interface/action.interface";
import RouteBit from "./fce/route.bit";
export declare const INIT_ROUTE = "[Route Action] Init Route";
export declare class InitRoute implements Action {
    bale: RouteBit;
    readonly type = "[Route Action] Init Route";
    constructor(bale: RouteBit);
}
export declare const AWAKE_ROUTE = "[Route Action] Waking Route";
export declare class AwakeRoute implements Action {
    bale: RouteBit;
    readonly type = "[Route Action] Waking Route";
    constructor(bale: RouteBit);
}
export declare const ROUTE_OPEN = "[Route Action] Waking Route";
export declare class Route implements Action {
    bale: RouteBit;
    readonly type = "[Route Action] Waking Route";
    constructor(bale: RouteBit);
}
export declare type Actions = InitRoute | AwakeRoute | Route;
