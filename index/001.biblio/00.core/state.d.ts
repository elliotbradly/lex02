import { BehaviorSubject } from "rxjs-compat";
import { Action } from "./interface/action.interface";
import UnitModel from "../BEE";
export default class State extends BehaviorSubject<any> {
    private dispatcher;
    rootReducer: any;
    log: string[];
    ini: string;
    constructor(init?: UnitModel);
    save: () => string;
    undo: () => any;
    hark(key: string): any;
    reducedApp(nextState: any, key: any): any;
    dispatch(value: Action): void;
    pat(value: Action): void;
    next(value: any): void;
}
