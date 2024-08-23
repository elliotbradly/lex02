import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import MemoryBit from "../fce/memory.bit";
export default class IndexMemoryArc extends Arc {
    private state;
    private path;
    constructor(state: State);
    init: (dat: MemoryBit) => void;
    awake: (dat: MemoryBit) => void;
}
