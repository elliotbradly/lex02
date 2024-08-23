import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
var EventEmitter = require("events").EventEmitter;

import * as S from "string";

import * as HarkO from "./01.open.unit/open.hark";
import * as HikeO from "./01.open.unit/open.hike";

import * as HarkS from "./02.screen.unit/screen.hark";
import * as HikeS from "./02.screen.unit/screen.hike";
import AvaColorBit from "./00.core/interface/ava/ava.color.bit";

import * as ActO from "./01.open.unit/open.action";
import { ScreenModel } from "./02.screen.unit/screen.model";

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
  gleam: null,
};

sim.wake = (bee: Beeing, gleam: any) => {
  sim.bee = bee;
  sim.gleam = gleam;

  if (sim.gleam == null) return console.log("you got no gleam");
  //add gleam to the system
  bee.state.dispatch({ type: ActO.WRITE_GLEAM, bale: gleam });

  var glop = gleam.bee.value.glop;
  bee.sing(HikeO.NAV, B.UPDATE);
  bee.hark(HarkO.NAV_DEX, navChange);
};

var navChange = (val) => {
  if (val == null) return;

  switch (val) {
    case 0:
      console.log("show show");
      sim.bee.hike(HikeS.SHOW, B.READ);
      break;

    case 1:
      console.log("show edit");
      sim.bee.hike(HikeS.EDIT, B.READ);
      break;

    case 2:
      console.log("show create");
      sim.bee.hike(HikeS.CREATE, B.READ);
      break;

    case 3:
      console.log("show hunt");
      sim.bee.hike(HikeS.HUNT, B.READ);
      break;
  }
  console.log("nav change " + val);
};

module.exports = sim;
