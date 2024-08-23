var trace = (msg) => console.log(msg);

global.E = require("../dist/001.gleam/00.core/constant/EVENT");
global.SIM = require("../dist/001.gleam/00.core/0pen");

var run = () => {
  global.GLEAM = require("../dist/001.gleam/00.work.gleam");
  GLEAM.wake(SIM.bee);
};

SIM.event.on(E.COMPLETE, run);
SIM.wake();
