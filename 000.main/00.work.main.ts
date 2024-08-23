import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as HarkS from "./01.effect.unit/effect.hark";
import * as HikeS from "./01.effect.unit/effect.hike";
import * as request from "request";
import { ipcMain, BrowserWindow } from "electron";
import { EffectModel } from "./01.effect.unit/effect.model";
import State from "./00.core/state";
import ResponseBit from "./01.effect.unit/fce/response.bit";
import CommandBit from "./01.effect.unit/fce/command.bit";
import * as FS from "fs-extra";
import Song from "./00.core/interface/song.interface";

var sim = {
  wake: null,
  open: null,
  bee: null,
  process: null,
  response: null,
  project: null,
  iframe: null,
  terminal: null,
};

var sender;

sim.wake = (bee: Beeing) => {
  sim.bee = bee;

  if (ipcMain != null) ipcMain.on(B.UPDATE, sim.process);
  if (ipcMain != null) ipcMain.on(B.OPEN, sim.open);

  bee.hark(HarkS.IFRAME, sim.iframe);
  bee.hark(HarkS.PROJECT, sim.project);
  bee.hark(HarkS.TERMINAL, sim.terminal);

  if (FS.existsSync("./index/dat/song.json")) {
    var song: Song = FS.readJSONSync("./index/dat/song.json");
    console.log("song " + JSON.stringify(song));
    if (song.pth != "" || song.mth != "") bee.song(song);
  } else {
    console.log("the song does not exist");
  }
};

sim.terminal = (val) => {
  if (val == null)
    return sim.bee.sing(HikeS.PROJECT, B.QUE, { idx: process.env.TERMINAL });

  if (BrowserWindow == null) return;

  BrowserWindow.getAllWindows().forEach((a) => {
    if (val == "true") {
      console.log("ready for the terminal " + process.env.IFRAME);
      a.webContents.loadFile("./index/001.terminal.html");

      //setTimeout(() => {
      //  sim.iframe(process.env.IFRAME);
      //}, 333);

      //sim.bee.sing(HikeS.PROJECT, B.OPEN, { idx: process.env.IFRAME });
      if (process.env.DEBUG == "true") a.webContents.openDevTools();
      else a.removeMenu();
    } else {
      console.log("load me a project " + process.env.IFRAME);
      a.webContents.loadFile("./index/" + process.env.IFRAME + ".html");
      if (process.env.DEBUG == "true") a.webContents.openDevTools();
      else a.removeMenu();
    }
  });
};

sim.iframe = (val) => {
  if (val == null) return;

  if (BrowserWindow == null) return;

  var lst = BrowserWindow.getAllWindows();
  lst.forEach((a) => a.webContents.send(B.OPEN, val));
};

sim.open = (event: Electron.IpcMainEvent) => {
  console.log(B.OPEN + " === " + process.env.IFRAME);
  //  event.sender.send(B.OPEN);
};

//sim.project = (val: ProjectBit) => {
//  console.log("project has been updated");
//  if (val == null) return;
//  sim.bee.sing(HikeS.INDEX, B.LIST, val);
//};

sim.response = (val: ResponseBit) => {
  console.log("response from terminal " + JSON.stringify(val));

  if (val == null) return;
  var state: State = sim.bee.state;
  var sMod: EffectModel = state.value.effect;
  if (sMod.sender == null) throw new Error("no sender for response");
  //var sender = sMod.sender.src;
  //var pack = JSON.stringify(val);
  //console.log("sending response " + pack);
  //sender.send(B.UPDATE, pack);
  //ipcMain.send('hello','a string', 10);
};

sim.process = (event: Electron.IpcMainEvent, args) => {
  if (args == null) return;
  var command: CommandBit = JSON.parse(args);

  console.log("command from terminal " + JSON.stringify(command));

  //sim.bee.sing(HikeS.COMMAND, B.UPDATE, { src: event.sender.send });
  sim.bee.sing(HikeS.COMMAND, B.WRITE, command);

  var dat = sim.bee.sing(command.act, command.vrb, command.dat);
  //this is for the upper terminal display to show a result
  var reply = JSON.stringify(dat);
  event.returnValue = reply;
  event.sender.send(B.UPDATE, reply);
};

//sim.command = (val: CommandBit) => {
//  if (val != null) sim.bee.sing(val.act, val.vrb);
//};

module.exports = sim;
