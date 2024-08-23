import { Singleton } from "typescript-ioc";
import * as FS from "fs-extra";
import * as doT from "dot";
import * as S from "string";

@Singleton
export default class BeeProcess {
  file = "./data/redux/BEE.txt";
  fileFin = "./data/redux/BEE.ts";

  private constructor() {}

  update = (title: string) => {
    console.log("please fire the update " + title);

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var list = FS.readdirSync("./" + title);
    var lineList = FS.readFileSync(this.file).toString().split("\n");

    var out = [];
    var dirList = [];

    var itemList = [];

    list.forEach((a, b) => {
      list[b] = "./" + title + "/" + a;

      if (FS.lstatSync(list[b]).isDirectory()) {
        if (S(list[b]).contains("unit") == false) return;

        var directory = list[b] + "/";
        var element = a.split(".")[1];

        console.log("updating " + element);

        var unitName = capitalizeFirstLetter(element);

        var unitImportSrc = "./" + a + "/" + element + ".unit";
        var unitImportSte =
          "import " + unitName + 'Unit from "' + unitImportSrc + '";';

        var faceImportSrc = "./" + a + "/fce/" + element + ".interface";
        var faceImportSte =
          "import " + unitName + ' from "' + faceImportSrc + '";';

        var modlImportSrc = "./" + a + "/" + element + ".model";
        var modlImportSte =
          "import { " + unitName + 'Model } from "' + modlImportSrc + '";';

        var redcImportSrc = "./" + a + "/" + element + ".reduce";
        var redcImportSte =
          "import * as reduceFrom" +
          unitName +
          ' from "' +
          redcImportSrc +
          '";';

        var reduced = element + " : reduceFrom" + unitName + ".reducer";
        var model =
          element + " : " + unitName + " = new " + unitName + "Model();";

        var item = {
          model,
          reduced,
          redcI: redcImportSte,
          modlI: modlImportSte,
          facI: faceImportSte,
          untI: unitImportSte,
          unitName,
          element,
        };

        itemList.push(item);
      }
    });

    var unitImports = "";
    itemList.forEach((a) => {
      unitImports += a.untI + "\n";
    });

    var faceImports = "";
    itemList.forEach((a) => {
      faceImports += a.facI + "\n";
      faceImports += a.modlI + "\n";
    });

    var unitListNom = ["TitleUnit"];
    itemList.forEach((a) => {
      unitListNom.push(a.unitName + "Unit");
    });

    var unitList = JSON.stringify(unitListNom) + ";";
    unitList = S(unitList).replaceAll('"', "");

    var reduceImports = "";
    itemList.forEach((a) => {
      reduceImports += a.redcI + "\n";
    });

    var reduceList = "";
    itemList.forEach((a, b) => {
      //if (b == reduceList.length - 1) return;
      reduceList += a.reduced + ", \n";
    });

    //reduceList += itemList[itemList.length - 1].reduced + "\n";

    var modelList = "";
    itemList.forEach((a, b) => {
      modelList += a.model + "\n";
    });

    var gel = {
      unitImports,
      faceImports,
      unitList,
      reduceImports,
      reduceList,
      modelList,

      // idx: "together000",
      // title: capitalizeFirstLetter(nom),
      // nom: nom,
      // wakeActionKey: nom.toUpperCase() + "_OPEN",
      // wakeActionFunction: capitalizeFirstLetter(nom),
      // bitNom: nom + "Bit",
      // bitTitle: capitalizeFirstLetter(nom) + "Bit",
      // actionLabel: capitalizeFirstLetter(nom),
      //actionTitle: "Waking " + capitalizeFirstLetter(nom),
    };

    var writeLine = [];

    lineList.forEach((a, b) => {
      console.log("line " + a);

      if (S(a).contains("//")) return;

      var doTCompiled = doT.template(a);
      var outLine = doTCompiled(gel);
      writeLine.push(outLine);
    });

    writeLine.forEach((a) => {
      console.log("line : " + a);
    });

    var finFile = writeLine.join("\n");

    FS.ensureFileSync(this.fileFin);

    FS.writeFileSync(this.fileFin, finFile);
    console.log("writing " + this.fileFin);
  };
}
