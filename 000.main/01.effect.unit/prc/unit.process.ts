import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as doT from "dot";
import * as S from "string";

@Singleton
export default class UnitProcess {
  loc = "./data/redux/00.sim.unit/";

  private constructor() {}

  replace = () => {
    var srcDir = "./000.main";
    var srcComp = "./comp.js";
    var srcTerminal = "./terminal.js";

    var list = FS.readdirSync("../");

    var outList = [];
    list.forEach((a, b) => {
      //if (b == 0) return;
      if (FS.lstatSync("../" + a).isDirectory() == false) return;

      if (S(a).contains(".") == false) return;
      var items = a.split(".");
      if (items[0].length != 3) return;
      outList.push(a);
      console.log("dirs " + a);
    });

    var path = require("path");
    var now = path.basename(path.dirname(require.main.filename));
    //var rePath = now.replace(/.+\//, "");
    outList.forEach((a) => {
      if (a == now) return;
      var fin = "../" + a + "/000.main";

      var compFin = "../" + a + "/comp.js";
      var terminalFin = "../" + a + "/terminal.js";

      FS.copySync(srcComp, compFin);
      FS.copySync(srcTerminal, terminalFin);

      FS.copy(srcDir, fin, () => {
        console.log("replaced " + compFin);
        console.log("replaced " + terminalFin);
        console.log("replaced with 000.main " + fin);
      });
    });

    console.log("now " + now);
  };

  copy = () => {
    var dirList = FS.readdirSync("./");
    var recList = dirList.filter((i) => {
      var item = i.split(".");
      if (item.length == 2 && item[0].length == 3) {
        return i;
      }
    });

    var src = "./" + recList.shift() + "/00.core";

    recList.forEach((a) => {
      var end = "./" + a + "/00.core";
      FS.copy(src, end, () => console.log("copy complete " + end));
    });
  };

  create = (title: String) => {
    if (title.split(".").length != 2) title = "00." + title;

    var num = title.split(".")[0];
    var nom = title.split(".")[1];

    console.log("nom " + nom);

    var file = this.loc;
    var list = FS.readdirSync(file);

    var out = [];
    list.forEach((a, b) => {
      list[b] = file + "/" + a;

      if (FS.lstatSync(list[b]).isDirectory()) {
        var directory = list[b];
        var listB = FS.readdirSync(directory);
        listB.forEach((c) => out.push(directory + "/" + c));
      } else {
        out.push(list[b]);
      }
    });

    if (nom == null) nom = "beeing";

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var gel = {
      idx: "together000",
      title: capitalizeFirstLetter(nom),
      nom: nom,
      wakeActionKey: nom.toUpperCase() + "_OPEN",
      wakeActionFunction: capitalizeFirstLetter(nom),
      bitNom: nom + "Bit",
      bitTitle: capitalizeFirstLetter(nom) + "Bit",
      actionLabel: capitalizeFirstLetter(nom),
      actionTitle: "Waking " + capitalizeFirstLetter(nom),
    };

    out.forEach((a) => {
      var neo = a.replace("sim", gel.nom);
      neo = neo.replace(".sim", "." + gel.nom);

      console.log("neo " + neo);

      var lineList = FS.readFileSync(a).toString().split("\n");

      lineList.forEach((a, b) => {
        console.log("line " + a);
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        lineList[b] = outLine;
      });

      lineList.forEach((a) => {
        console.log("line : " + a);
      });

      var finFin = neo.replace("sim", gel.nom);
      console.log("what you got for a fin fin " + finFin);

      finFin = finFin.replace("../data/redux/", "../data/redux/unit/");

      finFin = finFin.replace("00", num);

      finFin = finFin.replace(".txt", ".ts");

      var finFile = lineList.join("\n");

      FS.ensureFileSync(finFin);
      FS.writeFileSync(finFin, finFile);
      console.log("writing " + finFin);
    });

    console.log("how many files " + list.length);
    console.log("you are in ..  " + list.length);
  };
}
