import { EffectModel } from "../effect.model";
import ProjectBit from "../fce/project.bit";
import * as writeFileAtomic from "write-file-atomic";
import { app } from "electron";

export const openProject = (cpy: EffectModel, bal: ProjectBit) => {
  cpy.iframe = bal.idx;
  return cpy;
};

export const queTerminal = (cpy: EffectModel, bal: ProjectBit) => {
  if (bal.idx == cpy.terminal) return;

  if (cpy.terminal == null) {
    cpy.terminal = bal.idx;
    console.log("you are updating term " + cpy.terminal);
    return cpy;
  }

  console.log("pweeze show me the terminal " + cpy.terminal);

  var value = cpy.terminal;
  if (value == "false") value = "true";
  else if (value == "true") value = "false";

  var config = require("dotenv").config();
  var file = "";
  for (var key in config.parsed) {
    var line;
    if (key == "TERMINAL") line = key + "=" + value;
    else line = key + "=" + config.parsed[key]; //super important
    file += line + "\n";
  }

  //writeFileAtomic.sync("./.env", file);
  cpy.terminal = value;

  return cpy;
};

export const updateProject = (cpy: EffectModel, bal: ProjectBit) => {
  var config = require("dotenv").config();
  var file = "";
  for (var key in config.parsed) {
    var line;

    if (key == "IFRAME") {
      line = key + "=" + bal.idx;
    } else line = key + "=" + config.parsed[key]; //super important

    file += line + "\n";
  }

  writeFileAtomic.sync("./.env", file);

  cpy.iframe = bal.idx;

  return cpy;

  //delete cpy.project;
  //cpy.project = bal;

  //process.nextTick(() => {
  // app.exit();
  //});
};

export const writeProject = (cpy: EffectModel, bal: ProjectBit) => {
  var config = require("dotenv").config();
  var file = "";
  for (var key in config.parsed) {
    var line;

    if (key == "COMPILE") {
      line = key + "=" + bal.idx;
    } else line = key + "=" + config.parsed[key]; //super important

    file += line + "\n";
  }

  writeFileAtomic.sync("./.env", file);

  delete cpy.project;
  cpy.project = bal;

  process.nextTick(() => {
    app.exit();
  });
};
