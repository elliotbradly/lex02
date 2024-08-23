global.E = require("../dist/000.main/00.core/constant/EVENT");
global.SIM = require("../dist/000.main/00.core/0pen");

var init, test;

var wake = () => {
  init = require("../dist/000.main/00.init");
  init.event.on(E.COMPLETE, run);
  init.wake(SIM.bee);
};

var run = () => {
  test = require("../dist/000.main/00.work.main");
  test.wake(SIM.bee);
};

SIM.event.on(E.COMPLETE, wake);
SIM.wake();
