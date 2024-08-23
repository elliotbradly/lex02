import { GlopModel } from "../glop.model";
import Glop from "../fce/glop.interface";
import State from "../../00.core/state";
import GlopBit from "../fce/glop.bit";
import FileBit from "../fce/file.bit";
import * as FS from "fs-extra";
import * as S from "string";

export const writeBits = (cpy: GlopModel, bal: GlopBit) => {
  cpy.bitList = bal.data;
  return cpy;
};

export const writeNames = (cpy: GlopModel, bal: GlopBit) => {
  cpy.nameList = bal.data;
  return cpy;
};

export const writeNoms = (cpy: GlopModel, bal: GlopBit) => {
  cpy.nomList = bal.data;
  return cpy;
};

export const writeNomOpen = (cpy: GlopModel, bal: GlopBit) => {
  cpy.nomOpnList = bal.data;
  console.log("nice " + cpy.nomOpnList);

  return cpy;
};

export const writeColors = (cpy: GlopModel, bal: GlopBit) => {
  cpy.colorList = bal.data;

  var colorTitles = [];
  cpy.colorList.forEach((a) => {
    colorTitles.push(a);
  });

  cpy.colorTitles = colorTitles;

  return cpy;
};

export const writeBeeing = (cpy: GlopModel, bal: GlopBit) => {
  cpy.beeingList = bal.data;
  return cpy;
};

export const writeShapes = (cpy: GlopModel, bal: GlopBit) => {
  cpy.shapeList = bal.data;
  return cpy;
};

export const writePatterns = (cpy: GlopModel, bal: GlopBit) => {
  cpy.patternList = bal.data;
  return cpy;
};

export const writeGlop = (cpy: GlopModel, bal: Glop, ste: State) => {
  return cpy;
};

var objCheck = (val) => {
  if (isObject(val) == false) return val;
  var list = [];
  for (var key in val) {
    var item = S(val[key]).slugify();
    if (item.length >= 3) list.push(item);
  }
};

var isObject = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
