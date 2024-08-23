import Link from "./interface/link.interface";
export default class Line {
    address: any;
    addressList: any;
    constructor();
    route(lnk: Link): Link;
    register(dat: Link): void;
    action(typ: any, pth: any, dat: any, cbk?: any): any;
}
