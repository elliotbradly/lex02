import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as glob from "fast-glob";
import { slugify, isBlank, include } from "underscore.string";
import * as Moment from "moment";
import * as doT from "dot";
import * as Twitter from "twitter";
import LineCountBit from "../fce/line-count.bit";

@Singleton
export default class LineCountProcess {
  loc = "./data/";

  srcLoc = "";
  src0 = "./000.main/**/*.ts";
  src1 = "./000.terminal/**/*.ts";
  src2 = "./001.polygon/**/*.ts";
  extra = ["./main.js", "./preload.js", "./comp.js"];

  private constructor() {}

  read = () => {
    this.srcLoc = this.loc + "/log/word-count.txt";
    var text = FS.readFileSync(this.srcLoc).toString().split("\n");
    var dat = { lst: text.splice(0, 3) };
    return dat;
  };

  count = (dat: LineCountBit) => {
    var msg = dat.msg;
    this.srcLoc = this.loc + "/log/word-count.txt";

    var recList = ["./data/literature/"];

    recList.forEach((a, b) => {
      recList[b] = "./" + a + "/**/*.ts";
    });

    var list = glob.sync(recList, { dot: true });
    list.forEach((a, b) => (list[b] = "./" + a));

    this.extra.forEach((a) => list.push(a));

    var lines = [];
    var end = [];

    list.forEach((a, b) => {
      var file = FS.readFileSync(a).toString().split("\n");
      lines = lines.concat(file);
    });

    lines.forEach((a, b) => {
      if (include(a, "//")) return;
      lines[b] = "";
    });

    lines.forEach((a, b) => (lines[b] = slugify(a)));

    lines.forEach((a, b) => {
      if (isBlank(a)) return;
      end.push(a);
      // console.log(b + " ::: " + a);
    });

    var wordList = [];

    lines.forEach((a) => {
      var dash = a.split("-");
      wordList = wordList.concat(dash);
    });

    var words = {};
    wordList.forEach((a) => {
      if (words[a] != null) words[a] += 1;
      words[a] = 0;
    });

    var snowflake = [];
    for (var key in words) {
      snowflake.push({ key: key, count: words[key] });
    }

    FS.ensureDirSync(this.loc + "/log/");
    FS.ensureFileSync(this.loc + "/log/word-count.txt");

    var text = FS.readFileSync(this.srcLoc).toString().split("\n");

    var saves = text.length - 1;

    var wordStr = String(wordList.length).padStart(7, "0");
    var lineStr = String(lines.length).padStart(7, "0");
    var snowflakeStr = String(snowflake.length).padStart(5, "0");

    var logID = String(saves).padStart(4, "0");
    var log = lineStr + ":" + wordStr + ":" + snowflakeStr;
    var timeA = Moment().format("h:mm:ss");
    var padTime = timeA.split(":");
    var timeB = Moment().format("MMMM Do dddd a YYYY");
    var time = String(padTime[0]).padStart(2, "0") + ":";
    time += String(padTime[1]).padStart(2, "0") + ":";
    time += String(padTime[2]).padStart(2, "0");

    time += " " + timeB;

    var element = log + "_" + time;

    var compare = text[0].split("_")[1];
    var final = logID + "_" + element;

    if (msg != null) final += " : " + msg;

    text.unshift(final);

    if (compare != log) {
      var out = text.join("\n");
      FS.writeFileSync(this.srcLoc, out);
      console.log("writing " + this.srcLoc);
    }

    dat.lst = text.splice(0, 3);

    return dat;
  };
}
