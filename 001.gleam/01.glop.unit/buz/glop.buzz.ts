import { GlopModel } from "../glop.model";
import Glop from "../fce/glop.interface";
import State from "../../00.core/state";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";
import * as FS from "fs-extra";
import * as S from "string";

export const initGlob = (cpy: GlopModel, bal: GlopBit) => {
  var keyList = FS.readFileSync(".env").toString().split("\n");
  keyList.forEach((a) => {
    if (S(a).contains("RAPID_API") == true) cpy.rapidApi = a.split("=")[1];
    if (S(a).contains("GOOGLE_API") == true) cpy.googleApi = a.split("=")[1];
  });

  return cpy;
};

export const mapColor = (cpy: GlopModel, bal: FileBit, ste: State) => {
  var PNG = require("pngjs").PNG;

  if (S(bal.name).contains("png") == false) return;

  console.log("begin mapping color ");

  var clr = FS.readJsonSync("./data/color/colornames.json");
  var colors = {};

  for (var key in clr) {
    colors[clr[key].name] = clr[key].hex;
  }

  var nearestColor = require("nearest-color").from(colors);

  var data = FS.readFileSync(bal.path);
  var png = PNG.sync.read(data);

  var content = [];

  var percent;
  var lastPercent = 0;

  for (var y = 0; y < png.height; y++) {
    //if (y < 100) break;
    percent = (y / png.height) * 100;
    percent = Math.floor(percent);
    if (percent != lastPercent) console.log(percent);
    lastPercent = percent;

    for (var x = 0; x < png.width; x++) {
      var idx = (png.width * y + x) << 2;

      //if (x < 100) break;

      // invert color
      var r = (png.data[idx] = 255 - png.data[idx]);
      var g = (png.data[idx + 1] = 255 - png.data[idx + 1]);
      var b = (png.data[idx + 2] = 255 - png.data[idx + 2]);
      var a = (png.data[idx + 3] = png.data[idx + 3]);

      if (a != 255) continue;

      var convert = require("color-convert");
      var hex = convert.rgb.hex(r, g, b); // [ 35, 0, 98, 0 ]
      //console.log(hex);

      var love = "#" + hex;
      var kiss = nearestColor(love);
      var peach = S(kiss.name).slugify();

      var xID = String(x).padStart(4, "0");
      var yID = String(y).padStart(4, "0");

      var colorID = xID + "-" + yID + ":" + peach;
      content.push(colorID);
    }
  }

  var nameList = bal.name.split(".");
  nameList.pop();

  var nom = nameList.join("-");
  nom = S(nom).slugify() + ".txt";

  FS.ensureDirSync("./data/soul/");
  FS.writeFileSync("./data/soul/" + nom, content.join("\n"));
  console.log("wrote file sync " + nom);

  return cpy;
};
