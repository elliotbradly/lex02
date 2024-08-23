import { RouteModel } from "../route.model";
import Route from "../fce/route.interface";
import State from "../../00.core/state";
import RouteBit from "../fce/route.bit";
export declare const initRoute: (cpy: RouteModel, bal: RouteBit, ste: State) => RouteModel;
export declare const awakeRoute: (cpy: RouteModel, bal: RouteBit, ste: State) => void | RouteModel;
export declare const writeRoute: (cpy: RouteModel, bal: Route, ste: State) => RouteModel;
