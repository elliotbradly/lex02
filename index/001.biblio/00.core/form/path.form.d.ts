import Link from "../interface/link.interface";
export default class Path implements Link {
    method: string;
    path: string;
    data?: any;
    constructor(pth: string, mth?: string, dat?: any);
}
