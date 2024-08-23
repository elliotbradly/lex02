import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../effect.action";

import SupportBit from "../fce/effect.bit.interface";

import LineCountProcess from "../prc/line-count.process";
import WordCountProcess from "../prc/word-count.process";
import UnitProcess from "../prc/unit.process";
import BeeProcess from "../prc/bee.process";

import LineCountBit from "../fce/line-count.bit";

import ProjectBit from "../fce/project.bit";
import UnitBit from "../fce/unit.bit";

export default class IndexSupportArc extends Arc {
  @Inject private path: PathProcess;
  @Inject private lineCount: LineCountProcess;
  @Inject private wordCount: WordCountProcess;
  @Inject private bee: BeeProcess;
  @Inject private unit: UnitProcess;

  constructor(private state: State) {
    super(state);
  }

  read = () => {
    return this.lineCount.read();
  };

  list = (dat: LineCountBit) => {
    dat = this.wordCount.count(dat);
  };

  write = (dat: LineCountBit) => {
    dat = this.lineCount.count(dat);
    this.path.move(this.state, Act.WRITE_LINE_COUNT, dat);
    return dat;
  };

  create = (dat: UnitBit) => this.unit.create(dat.idx);

  copy = (dat: UnitBit) => this.unit.copy();

  update = (dat: UnitBit) => this.bee.update(dat.idx);

  replace = (dat: UnitBit) => this.unit.replace();
}
