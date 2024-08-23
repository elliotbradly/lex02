import State from "../../state";
export default class PathProcess {
    private constructor();
    move: (state: State, type: string, bale?: any) => void;
    link: (ste: State, pth: string, mth?: string, dat?: any, spd?: number) => void;
}
