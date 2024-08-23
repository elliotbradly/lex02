import Memory from "./fce/Memory.interface";
export declare class MemoryModel implements Memory {
    type?: string;
    url?: string;
    entities?: any;
    synchronize?: boolean;
    logging?: boolean;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
    power: boolean;
}
