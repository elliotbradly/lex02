const FS = require("fs-extra");
const doT = require("dot");

const src = "../data/redux/";
const dest = "../src/";
const open = "../src/";

// Start function
var unitImport = [];
var unitList = [];

var reduceImport = [];
var reduceList = [];

var spinImport = [];
var spinList = [];

var modelImport = [];
var modelList = [];

const unit = item => {
  var lower = item.split(".")[1];
  var count = item.split(".")[0];
  var upper = lower.charAt(0).toUpperCase() + lower.slice(1);

  //import TitleUnit from "../000.title.unit/title.unit";
  var importUnit =
    'import {{=it.upper}}Unit from "../{{=it.count}}.{{=it.lower}}.unit/{{=it.lower}}.unit";';

  var temp = doT.template(importUnit);
  var line = temp({ upper, count, lower });

  var unitName = upper + "Unit";

  unitImport.push(line);
  unitList.push(unitName);

  var importReduce =
    'import * as reduceFrom{{=it.upper}} from "../{{=it.count}}.{{=it.lower}}.unit/{{=it.lower}}.reduce";';
  temp = doT.template(importReduce);
  line = temp({ upper, count, lower });

  reduceImport.push(line);

  var update = "{{=it.lower}}: reduceFrom{{=it.upper}}.reducer";
  temp = doT.template(update);
  line = temp({ upper, count, lower });

  reduceList.push(line);

  update =
    'import * as spinFrom{{=it.upper}} from "../{{=it.count}}.{{=it.lower}}.unit/{{=it.lower}}.spin";';
  temp = doT.template(update);
  line = temp({ upper, count, lower });

  spinImport.push(line);

  update = "{{=it.lower}}: spinFrom{{=it.upper}}";
  temp = doT.template(update);
  line = temp({ upper, count, lower });

  spinList.push(line);

  update = `
  import {{=it.upper}} from "../{{=it.count}}.{{=it.lower}}.unit/fce/{{=it.lower}}.interface"; \n
  import { {{=it.upper}}Model } from "../{{=it.count}}.{{=it.lower}}.unit/{{=it.lower}}.model";
  `;
  temp = doT.template(update);
  line = temp({ upper, count, lower });

  modelImport.push(line);

  update = "{{=it.lower}} : {{=it.upper}} = new {{=it.upper}}Model();";
  temp = doT.template(update);
  line = temp({ upper, count, lower });

  modelList.push(line);

  console.log(line);
};

const create = loc => {
  var fin = dest + loc + "/000.core/";
  FS.ensureDirSync(fin);
  console.log("where is the fin " + fin);

  var unitLoc = open + loc;

  var unitFiles = FS.readdirSync(unitLoc);
  unitFiles.forEach(a => {
    if (a.includes("unit") == false) return;
    unit(a);
  });

  var beeingSrc = src + "beeing.txt";
  var effectSrc = src + "effect.txt";
  var modelSrc = src + "model.txt";

  unitImport = unitImport.join("\n");
  unitList = unitList.join(" , ");

  var beeingList = FS.readFileSync(beeingSrc)
    .toString()
    .split("\n");

  beeingList.forEach((a, b) => {
    var temp = doT.template(a);
    var out = temp({ unitImport, unitList });
    beeingList[b] = out;
  });

  FS.writeFileSync(fin + "beeing.ts", beeingList.join("\n"));

  var reduceDefine = reduceImport.join("\n");
  reduceList = reduceList.join(" , ");

  var spinDefine = spinImport.join("\n");
  spinList = spinList.join(" , ");

  var effectLines = FS.readFileSync(effectSrc)
    .toString()
    .split("\n");

  effectLines.forEach((a, b) => {
    var temp = doT.template(a);
    var out = temp({ reduceDefine, reduceList, spinDefine, spinList });
    effectLines[b] = out;
  });

  FS.writeFileSync(fin + "effect.ts", effectLines.join("\n"));

  var modelDefine = modelImport.join("\n");
  var modelDeploy = modelList.join("\n");

  var modelLines = FS.readFileSync(modelSrc)
    .toString()
    .split("\n");

  modelLines.forEach((a, b) => {
    var temp = doT.template(a);
    var out = temp({ modelDefine, modelDeploy });
    modelLines[b] = out;
  });

  FS.writeFileSync(fin + "model.ts", modelLines.join("\n"));
};

// Call start
const start = () => {
  FS.ensureDirSync(dest);

  create("bee");
};

start();
