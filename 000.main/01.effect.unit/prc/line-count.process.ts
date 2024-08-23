import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as glob from "fast-glob";
import { slugify, isBlank, include } from "underscore.string";
import * as Moment from "moment";
import * as doT from "dot";
import * as Twitter from "twitter";
import * as open from "open";
import * as S from "string";
import LineCountBit from "../fce/line-count.bit";

@Singleton
export default class LineCountProcess {
  loc = "./data/";

  srcLoc = "";
  src0 = "./000.main/**/*.ts";
  src1 = "./000.terminal/**/*.ts";
  src2 = "./001.polygon/**/*.ts";
  extra = ["./main.js", "./comp.js", "terminal.js"];

  private constructor() {}

  read = () => {
    this.srcLoc = this.loc + "/log/line-count.txt";
    var text = FS.readFileSync(this.srcLoc).toString().split("\n");
    var dat = { lst: text.splice(0, 3) };
    return dat;
  };

  count = (dat: LineCountBit) => {
    require("dotenv").config();

    var msg = dat.msg;
    this.srcLoc = this.loc + "/log/line-count.txt";

    var cohesion = [];

    var masterList = FS.readdirSync("../");
    masterList.forEach((z) => {
      if (z.split(".").length != 2) return;
      var dom = z.split(".")[0];
      if (dom.length > 3) return;
      cohesion.push(z);
    });

    var allList = [];

    cohesion.forEach((x) => {
      var dirList = FS.readdirSync("../" + x);

      var recList = dirList.filter((i) => {
        var item = i.split(".");
        if (item.length == 2 && item[0].length == 3) {
          return i;
        }
      });

      var itemList = [];
      recList.forEach((c) => {
        var item = { cohesion: x, intent: c };
        itemList.push(item);
      });

      allList = allList.concat(itemList);
    });

    var intents = {};
    var finList = [];

    allList.forEach((a) => {
      if (intents[a.intent] != null) return;
      intents[a.intent] = 0;
      finList.push(a);
      console.log("check: " + JSON.stringify(a));
    });

    var unitList = [];
    var extraList = [];

    finList.forEach((a) => {
      var itemList = FS.readdirSync("../" + a.cohesion + "/" + a.intent);

      itemList.forEach((b) => {
        if (include(b, ".json")) return;

        var point = "../" + a.cohesion + "/" + a.intent + "/" + b;
        var gather = point + "/**/*.ts";

        if (FS.lstatSync(point).isDirectory() == true) unitList.push(gather);
        else extraList.push(point);
      });
    });

    this.extra = this.extra.concat(extraList);

    var coreUnit;

    unitList = unitList.filter((i) => {
      if (S(i).contains("00.core") == false) return i;
      coreUnit = i;
    });

    //allList.forEach((a, b) => {
    //  allList[b] = "./" + a + "/**/*.ts";
    //});
    //unitList.forEach((a) => {
    //  console.log("variation " + a);
    //});

    unitList.push(coreUnit);

    console.log("core unit " + coreUnit);

    var list = glob.sync(unitList, { dot: true });
    list.forEach((a, b) => (list[b] = "./" + a));

    this.extra.forEach((a) => list.push(a));

    var lines = [];
    var end = [];

    list.forEach((a, b) => {
      console.log("file:: " + a);
      var file = FS.readFileSync(a).toString().split("\n");
      lines = lines.concat(file);
    });

    console.log("file count:: " + list.length);
    console.log("line count:: " + lines.length);

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
    FS.ensureFileSync(this.loc + "/log/line-count.txt");

    var text = FS.readFileSync(this.srcLoc).toString().split("\n");

    var saves = text.length - 1;

    var wordStr = String(wordList.length).padStart(5, "0");
    var lineStr = String(lines.length).padStart(5, "0");
    var snowflakeStr = String(snowflake.length).padStart(4, "0");
    var fileStr = String(list.length).padStart(4, "0");

    var logID = String(saves).padStart(4, "0");
    var log = lineStr + ":" + wordStr + ":" + snowflakeStr + ":" + fileStr;
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

    if (msg != null) final += " ~ " + msg;

    if (msg != null) {
      var commitMessage = 'git add -A && git commit -m "{{=it.cmtMsg}}"';
      var temp = doT.template(commitMessage);
      var line = temp({ cmtMsg: msg });

      const exec = require("child_process").exec;

      exec(line, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }

        // console.log(`stdout: ${stdout}`);
        // console.log(`stderr: ${stderr}`);
        // console.log("------ ");
        //console.log("now " + final);
        // console.log("----- ");
      });
    }

    text.unshift(final);

    if (compare != log) {
      var out = text.join("\n");

      FS.writeFileSync(this.srcLoc, out);
      //console.log("writing " + this.srcLoc);

      const screenshot = require("screenshot-desktop");

      var cnt = FS.readdirSync("./data/screenshot").length;
      var screenCount = String(cnt).padStart(5, "0");
      var screenNom = "./data/screenshot/" + screenCount + ".png";

      screenshot({ filename: screenNom }).then((imgPath) => {
        var data = FS.readFileSync(screenNom);

        setTimeout(() => {
          FS.remove(screenNom, () => console.log("removed " + screenNom));
        }, 5555);

        var client = new Twitter({
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
          access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        });

        final += " #IndieWorldOrder";

        client.post("media/upload", { media: data }, function (
          error,
          media,
          response
        ) {
          if (!error) {
            // If successful, a media object will be returned.
            //console.log(media);
            client
              .post("statuses/update", {
                status: final.split("~")[1] + " : " + final.split("~")[0],
                media_ids: media.media_id_string,
              })
              .then(function (tweet) {
                console.log("tweet successful " + lineStr);
                open("https://twitter.com/perfectbeeing");

                //console.log(tweet);
              })
              .catch(function (error) {
                console.log("tweet error " + JSON.stringify(error));
                throw error;
              });
          } else {
            console.log("twitter error " + JSON.stringify(error));
          }
        });
      });
    }

    dat.lst = text.splice(0, 3);

    return dat;
  };
}
