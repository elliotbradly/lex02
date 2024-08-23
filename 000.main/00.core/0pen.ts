import "reflect-metadata";
import Beeing from "./beeing";
import Line from "./line";
import Path from "./form/path.form";
import * as E from "./constant/EVENT";

var EventEmitter = require("events").EventEmitter;

var self = {
  dev: true,
  wake: null,
  start: null,
  sim: null,
  line: null,
  route: null,
  bee: null,
  event: new EventEmitter()
};

self.wake = () => {
  self.bee = new Beeing();
  self.line = new Line();

  self.event.emit(E.COMPLETE);

  return self.line;
};

self.route = (pth: string, mth: string) => {
  var path = new Path(pth, mth);
  self.line.route(path);
};

module.exports = self;
