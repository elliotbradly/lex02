import State from "../state";
import { Subscription } from "rxjs";
export default class Arc {
    event: Subscription;
    value: any;
    constructor(state: State);
    create(dat?: any): void;
    read(dat?: any): void;
    update(dat?: any): void;
    delete(dat?: any): void;
    response(val: any): void;
}
