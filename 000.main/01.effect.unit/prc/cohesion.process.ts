import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as doT from "dot";
import * as S from "string";

@Singleton
export default class IntentionProcess {
  file = "./data/redux/BEE.txt";
  fileFin = "./data/redux/BEE.ts";

  pubRoot = "../pub/";

  private constructor() {}

  update = (dir) => {
    if (dir == null) return console.log("no directory for update " + dir);

    var lst = FS.readFileSync("./000.main/01.effect.unit/dat/vrt.dpy.bat")
      .toString()
      .split("\n");

    lst.forEach((a, b) => {
      var temp = doT.template(a);
      var line = temp({ cohesion: dir });
      lst[b] = line;
    });

    FS.ensureFileSync(__dirname + "/batch/vrt.dpy.bat");
    FS.writeFileSync(__dirname + "/batch/vrt.dpy.bat", lst.join("\n"));

    var child_process = require("child_process");
    child_process.exec(__dirname + "/batch/vrt.dpy.bat", function (
      error,
      stdout,
      stderr
    ) {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    });
  };

  publish = (dir) => {
    console.log("publish cohesion " + dir);
    if (dir == null) return;

    var copyList = [];

    var root = "../" + dir;
    if (FS.existsSync(root) == false) return;
    var intentList = FS.readdirSync(root + "/index");

    intentList.forEach((a, b) => {
      var datItem = {
        src: root + "/index/" + a,
        fin: this.pubRoot + dir + "/" + a,
      };
      intentList[b] = datItem;
    });

    intentList.forEach((a) => {
      //console.log("check " + a);
      if (FS.lstatSync(a.src).isDirectory() == true) return;

      if (S(a.src).contains(".js") == false) return;
      copyList.push(a);
      //console.log("copy " + a);
    });

    copyList.forEach((a) => {
      console.log("copy me " + a.src);
      console.log("fin me " + a.fin);
      FS.ensureFileSync(a.fin);
      FS.copy(a.src, a.fin, () => {
        console.log("copy complete " + a.fin);
      });
    });
  };
}
