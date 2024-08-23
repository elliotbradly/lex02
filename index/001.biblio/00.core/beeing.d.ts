import State from "./state";
import Line from "./line";
import Sing from "./interface/song.interface";
export default class Beeing {
    line: Line;
    value: any;
    private path;
    state: State;
    constructor();
    private doTCompiled;
    power: (val: string, mth?: string, dat?: any) => void;
    hark: (key: string, rsp: any) => any;
    move: (type: string, bale?: any) => void;
    sing: (pth: string, mth?: string, dat?: any, spd?: number) => void | import("./interface/link.interface").default;
    song: (song: Sing) => void;
}
