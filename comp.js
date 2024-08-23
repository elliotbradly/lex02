const program = require("commander");
var beep = require("beepbeep");
const moment = require("moment");
const S = require("string");
require("dotenv").config();
const stringify = require("stringify");

const FS = require("fs-extra");
var opn = moment().valueOf();

const { spawn } = require("child_process");
const { fork } = require("child_process");

var elp, diff;
var core;
var opened = false;

const browserify = require("browserify");

var create = (project) => {
  var processLine = "tsc -b " + project + " --watch";
  console.log("process line " + processLine);
  const bat = require("child_process").exec(processLine);

  var resetting = false;

  bat.stdout.on("data", (data) => {
    if (data.toString().length < 3) return;
    if (
      S(data.toString()).contains("Starting compilation in watch mode") == true
    ) {
      return;
    }

    if (S(data.toString()).contains("File change detected") == true) {
      if (process.env.COMPILE == "000.main") resetting = true;
      opn = moment().valueOf();
      return;
    }

    var red = moment().valueOf();
    diff = red - opn;
    elp = moment.duration(diff);
    console.log("COMPILED " + project + " ::  " + JSON.stringify(elp._data));

    var item = data.toString();
    var noWhammies = "Found 0 errors";

    if (S(item).contains(noWhammies) == false) {
      console.log("ERRROR " + project + " :: " + item);
      beep(3, 333);
      return;
    } //true

    if (S(project).contains("000.painbot") == false) return trans(project);

    var fin = moment().valueOf();
    diff = fin - opn;
    elp = moment.duration(diff);
    console.log("COMPLETE MAIN " + project + " :" + JSON.stringify(elp._data));
    console.log("---------- ");
    complete(project);

    //mainWindow.loadFile("./index/" + process.env.DISPLAY + ".html");
    //core = require("./000.main/000.index");
  });

  bat.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  var trans = (project) => {
    var bun0 = moment().valueOf();

    var stream = FS.createWriteStream("./index/" + project + ".js");
    stream.on("error", () => {
      console.log("error broserify stream");
    });
    stream.on("finish", () => {
      var opnLoc = "./data/" + project;

      FS.copy(opnLoc, "./index", (e) => {
        var fin = moment().valueOf();
        diff = fin - opn;
        elp = moment.duration(diff);

        Object.keys(require.cache).forEach(function (key) {
          if (key != "electron") delete require.cache[key];
        });

        console.log("COMPLETE " + project + " : " + JSON.stringify(elp._data));
        console.log("---------- ");
        complete(project);
        //console.log("you did it  " + e);
      });

      beep();
      //mainWindow.loadFile("./index/" + process.env.DISPLAY + ".html");

      var bun1 = moment().valueOf();
      diff = bun1 - opn;
      elp = moment.duration(diff);
      console.log("BUNDLED " + project + " : " + JSON.stringify(elp._data));

      // FS.copy('./data/index/', '../app/', () => {

      //if (head != null) return

      //head = require('child_process').exec('npm run surface');
      //open('http://localhost:3000');
      //require('child_process').exec('npm run prod:serve');

      // })
    });

    var b = browserify()
      .transform(stringify, {
        appliesTo: {
          includeExtensions: [".txt", ".html"],
        },
      })
      .exclude("fs")
      .exclude("fs-extra")
      .exclude("screenshot-desktop")
      .exclude("child_process")
      .exclude("clipboardy")
      .exclude("ytdl")
      .exclude("readline")
      .exclude("ipcMain")
      .exclude("BrowserWindow")
      .exclude("twitter")
      .exclude("electron")
      .exclude("fast-glob")
      .exclude("write-file-atomic")
      .exclude("express")
      .exclude("pg")
      .exclude("typeorm")
      .exclude("cors")
      .exclude("express")
      .exclude("socket.io")
      .exclude("http")
      .exclude("open")
      .exclude("process")
      .exclude("socket.io-client")
      .exclude("sharp")
      .exclude("natural")
      .exclude("pos");

    b.exclude("babylonjs");
    //b.exclude("pixi.js");

    //if (process.env.TERMINAL == "false") b.exclude("babylonjs");
    //if (process.env.TERMINAL == "false") b.exclude("pixi.js");
    //.exclude("typescript-ioc")
    // .exclude("ipcRenderer")
    b.add("./" + project + "/000.index." + project.split(".")[1] + ".js");
    b.bundle().pipe(stream);
  };
};

var dirList = FS.readdirSync("./");

var recList;

if (process.env.COMPILE == "all") {
  recList = dirList.filter((i) => {
    var item = i.split(".");
    if (item.length == 2 && item[0].length == 3) {
      return i;
    }
  });
} else recList = process.env.COMPILE.split(",");

recList.forEach((a, b) => (recList[b] = S(a).collapseWhitespace()));

console.log("--------------------");
console.log("--------------------");
console.log("--------------------");

var firstLoad = false;

const finish = (project) => {
  if (opened) {
    console.log("i want you to reset");

    return;
  }

  if (S(project).contains("000.main")) {
    console.log("game over");
    process.exit();
  }

  var processLine0 = "npm start";
  console.log("process line " + processLine0);
  const bat0 = require("child_process").exec(processLine0);

  bat0.stdout.on("data", (data) => {
    if (data.toString().length < 3) return;
    console.error(data.toString());
  });

  bat0.stdout.on("close", (data) => {
    console.log("good bye");
    process.exit();
  });

  if (opened == false) opened = true;
};

const complete = (project) => {
  console.log("clarie danes " + recList.length);
  if (recList.length == 0) return finish(project);

  if (S(project).contains("000.main") == true && firstLoad == false) {
    firstLoad = true;
    console.log("go go go first load");
  }

  process.nextTick(() => {
    if (recList.length != 0) create(recList.shift());
    else {
    }
  });
};

create(recList.shift());
