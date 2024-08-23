import { GlopModel } from "../glop.model";
import Glop from "../fce/glop.interface";
import State from "../../00.core/state";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";
import * as FS from "fs-extra";
import * as S from "string";
import * as Act from "../glop.action";

export const formatLine = (cpy: GlopModel, bal: GlopBit) => {
  var src = bal.src;
  src = S(src).replaceAll(",", ",\n \t");
  src = S(src).replaceAll("and", "\n \t and");
  src = S(src).replaceAll("but", "\n \t but");
  src = S(src).replaceAll(":", "\n \t :");
  src = S(src).replaceAll("?", "\n \t ?");
  src = S(src).replaceAll("!", "\n \t !");
  src = S(src).replaceAll(".", "\n \t .");

  cpy.formatedLine = src;
};

export const openFormFinFiles = (cpy: GlopModel, bal: GlopBit) => {
  console.log("open form fin file " + JSON.stringify(bal));

  var finFile = "./data/form/" + bal.idx + ".txt";
  FS.ensureFileSync(finFile);

  var list = FS.readFileSync(finFile).toString().split("\n");

  console.log("load this " + finFile);
  cpy.formList = null;
  cpy.formList = list;
  cpy.formFileFinCount += 1;

  console.log("forms " + list.length);

  return cpy;
};

export const copyFormFinFiles = (cpy: GlopModel, bal: GlopBit) => {
  var major = "./data/form/";

  FS.ensureDirSync(major);

  var fileList = [];
  var list = FS.readdirSync(major);

  cpy.formFileFinList = list;
  cpy.formFileFinCount += 1;

  return cpy;
};

export const fetchFormFiles = (cpy: GlopModel, bal: GlopBit) => {
  //var major = "./data/form/" + bal.typ;
  var major = "./data/character/";

  FS.ensureDirSync(major);

  var fileList = [];
  var list = FS.readdirSync(major);

  list.forEach((a) => {
    var point = a.split(".");
    if (point.length != 0) return console.log("file found ");
    //var item = point.pop();
    fileList.push(point);
  });

  cpy.formFileList = list;

  //
};

export const addForm = (cpy: GlopModel, bal: GlopBit, ste: State) => {
  console.log("add this form " + JSON.stringify(bal));
  if (bal == null) return console.log("you got no bale");
  if (bal.src == null) bal.src = "000";

  return;

  var Fate = require("chance");
  var fate = new Fate(19250821);

  var formDir = "./data/character/" + bal.src;
  var formList = FS.readdirSync(formDir);

  FS.ensureFileSync(formDir + "/detail.txt");
  FS.ensureFileSync(formDir + "/title.txt");
  FS.ensureFileSync(formDir + "/object.txt");

  var detailList = FS.readFileSync(formDir + "/detail.txt")
    .toString()
    .split("\n");

  var titleList = FS.readFileSync(formDir + "/title.txt")
    .toString()
    .split("\n");

  var objectList = FS.readFileSync(formDir + "/object.txt")
    .toString()
    .split("\n");

  var nom;
  formList.forEach((a) => {
    if (S(a).contains(".json") == false) return;
    nom = a.split("."[0]);
  });

  var windList = [detailList, titleList, objectList];
  var countList = [1, 1, 1, 1, 2, 3, 1, 1, 3, 4, 2, 2, 2, 2];

  var wind = fate.pick(windList);
  var count = fate.pick(countList);

  var shapeList = [nom];

  for (var i = 0; i <= count; i++) {
    shapeList.push(fate.pick(wind));
  }

  shapeList = fate.shuffle(shapeList);

  nom = shapeList.join(" ");

  console.log("pizza man " + nom);

  var message = nom + "00 : " + bal.idx;

  //find color

  var Fuse = require("fuse.js");

  const fuse = new Fuse(cpy.colorTitles, {
    includeScore: true,
  });
  const result = fuse.search(bal.idx);

  var item;
  var monad;

  if (result.length == 0) {
    monad = fate.pick(cpy.colorTitles);
  } else if (result.length == 1) {
    item = result[0];
  } else {
    item = fate.pick(result);
  }

  console.log("ss " + JSON.stringify(item));

  if (item != null) monad = item["item"].split(":")[0];

  if (S(monad).contains(":")) {
    monad = monad.split(":")[0];
  }

  monad = S(monad).slugify();

  //now lexify

  ste.dispatch({
    type: Act.CREATE_TERM,
    bale: { idx: bal.idx, flv: monad, src: bal.src, typ: bal.typ },
  });

  return cpy;
};

export const mapForm = (cpy: GlopModel, bal: FileBit, ste: State) => {
  console.log("map us a form " + JSON.stringify(bal));

  var point = bal.name.split(".");
  if (point.length == 0) return console.log("not a file ");

  var item = point.pop();
  if (item != "txt") return console.error("not text; wrong type");

  var pos = require("pos");

  var file = FS.readFileSync(bal.path).toString().split("\n");

  var treasure = [];

  var filter;

  switch (bal.target) {
    case "object":
      filter = ["NN", "NNS"];
      break;

    case "title":
      filter = ["NNP", "NNPS"];
      break;

    case "beat":
      filter = ["VBG"];
      break;

    case "nature":
      filter = ["RB", "RBR", "RBS"];
      break;

    case "detail":
      filter = ["JJ", "JJR", "JJS"];
      break;

    case "odd":
      filter = ["FW", "UH"];
      break;
  }

  file.forEach((a) => {
    var words = new pos.Lexer().lex(a);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);

    for (var i in taggedWords) {
      var taggedWord = taggedWords[i];
      var word = taggedWord[0];
      var tag = taggedWord[1];
      filter.forEach((c) => {
        if (tag != c) return;
        treasure.push(word);
      });
    }
  });

  var output = {};
  var outList = [];
  treasure.forEach((a) => {
    if (a.length < 3) return;
    a = S(a).slugify();

    if (output[a] == null) {
      var item = { idx: a, cnt: 0 };
      output[a] = item;
      outList.push(output[a]);
    }
    output[a] = output[a].cnt + 1;
  });

  outList.sort((a, b) => {
    return b.cnt - a.cnt;
  });

  var finList = [];
  outList.forEach((a) => {
    finList.push(a.idx);
  });

  cpy.formList = finList;

  var loc = bal.name.split(".")[0];
  loc = S(loc).slugify(loc);
  var file = "./data/form/" + loc + "/" + bal.target + ".txt";

  console.log("write this some where " + file);

  if (FS.existsSync(file) == false) {
    FS.ensureFileSync(file);
    FS.writeFileSync(file, finList.join("\n"));
  }

  console.log("size " + finList.length);

  return cpy;
};
