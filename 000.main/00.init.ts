import Beeing from "./00.core/beeing";
import * as E from "./00.core/constant/EVENT";
import * as C from "./00.core/constant/CONTROL";

import * as TitleHark from "./00.core/title/title.hark";

var EventEmitter = require("events").EventEmitter;
import * as moment from "moment";

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
  action: null,
};

sim.wake = (bee: Beeing) => {
  //console.log("wake control " + bee);
  sim.event.emit(E.COMPLETE);
};

sim.action = (val) => {};

module.exports = sim;
