import { Subject } from "rxjs";
export declare class Dispatcher extends Subject<any> {
    constructor();
    dispatch(value: any): void;
}
