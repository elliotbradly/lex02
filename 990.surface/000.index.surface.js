var trace = (msg) => console.log(msg);

const remote = require("electron").remote;

global.E = require("../dist/990.surface/00.core/constant/EVENT");
global.SIM = require("../dist/990.surface/00.core/0pen");

var run = () => {
  global.SURFACE = require("../dist/990.surface/00.work.surface");
  SURFACE.wake(SIM.bee, global.GLEAM);
};

SIM.event.on(E.COMPLETE, run);
SIM.wake();
