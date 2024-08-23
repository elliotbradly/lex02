import State from "../../00.core/state";
import { GlopModel } from "../glop.model";
import GlopBit from "../fce/glop.bit";
import Avatar from "../../00.core/form/avatar.form";
import * as S from "string";
import AvaColorBit from "001.gleam/00.core/interface/ava/ava.color.bit";
import * as FS from "fs-extra";

export const initAvatar = (cpy: GlopModel, bal: GlopBit, ste: State) => {
  console.log("pop that avatar ");

  FS.ensureDirSync("./data/avatar/");

  cpy.shapeList.forEach((a) => {
    if (a.length < 3) return;

    a = S(a).collapseWhitespace();

    var fin = "./data/avatar/" + a;

    FS.ensureDirSync(fin);
  });

  return cpy;
};

export const createNom = (cpy: GlopModel, bal: GlopBit, ste: State) => {
  console.log("create the nom");

  var str = bal.idx;

  var sub0 = str.substr(0, 2);
  var sub1 = str.substr(0, 3);
  var sub2 = str.substr(0, 4);
  var sub3 = str.substr(0, 5);

  var list = str.split("-");
  var sub4 = list[0];

  if (sub4 != null) {
    var sub5 = sub4.substr(0, 3);
    var sub6 = sub4.substr(0, 4);
    var sub7 = sub4.substr(0, 5);
  }

  var sub8 = S(str).replaceAll("a", "");
  sub8 = S(sub8).replaceAll("e", "");
  sub8 = S(sub8).replaceAll("i", "");
  sub8 = S(sub8).replaceAll("0", "");

  if (sub4 != null) {
    var sub9 = S(sub4).replaceAll("a", "");
    sub9 = S(sub9).replaceAll("e", "");
    sub9 = S(sub9).replaceAll("i", "");
    sub9 = S(sub9).replaceAll("0", "");
  }

  var tstLst = [sub4, sub0, sub1, sub2, sub3, sub5, sub6, sub7, sub8, sub9];

  var hold = {};
  tstLst.forEach((a) => {
    if (a == null) return;
    if (a.length < 3) return;
    if (hold[a] != null) return;
    hold[a] = 0;
  });

  var lst = [];
  for (var key in hold) {
    lst.push(key);
  }

  const options = {
    includeScore: true,
  };

  var gMod: GlopModel = ste.value.glop;

  var list = gMod.nomOpnList;

  var Fuse = require("fuse.js");

  const fuse = new Fuse(list, options);
  const result = fuse.search(str);

  console.log("you got any result " + JSON.stringify(result));
  console.log("king " + lst);

  var disk = [];

  result.forEach((a) => {
    disk.push(a.item);
  });

  lst.forEach((a) => {
    disk.push(a);
  });

  var fog = {};
  disk.forEach((a) => {
    if (fog[a] != null) return;
    fog[a] = 0;
  });

  var touch = [];
  for (var key in fog) {
    touch.push(key);
  }

  var Fate = require("chance");
  var fate = new Fate();
  touch = fate.shuffle(touch);

  cpy.nomList = touch;
  //console.log("you got yourself a new nom list " + cpy.nomList);

  return cpy;
};

export const updateAvaColor = (
  cpy: GlopModel,
  bal: AvaColorBit,
  ste: State
) => {
  cpy.avatarBase.color = bal;
};

export const updateAva = (cpy: GlopModel, bal: Avatar, ste: State) => {
  for (var key in bal) {
    if (cpy.avatarBase[key] == null) continue;

    switch (key) {
      case "name":
        cpy.avatarBase.name = bal[key];
        break;
    }
  }

  return cpy;
};

export const createAva = (cpy: GlopModel, bal: GlopBit, ste: State) => {
  var avatar = cpy.avatarBase;

  for (var key in bal) {
    if (key == "color") JSON.parse(bal[key]);
    else avatar[key] = bal[key];
  }

  cpy.avaBit = avatar; //you may need to remove this

  var FS = require("fs-extra");
  FS.ensureDirSync("./data/character");

  var dir = "./data/character/" + avatar.name + "/";
  FS.ensureDirSync(dir);

  var fin0 = dir + "ava" + ".json";
  var fin1 = dir + "beeing" + ".txt";
  var fin2 = dir + "object" + ".txt";
  var fin3 = dir + "beat" + ".txt";
  var fin4 = dir + "title" + ".txt";
  var fin5 = dir + "detail" + ".txt";

  var beeingLines = [];
  beeingLines.push(avatar.nom + " 00 : ");
  beeingLines.push(avatar.nom + " 01 : ");

  var glop = beeingLines.join("\n");

  FS.writeJsonSync(fin0, avatar);
  FS.writeFileSync(fin1, glop);
  FS.writeFileSync(fin2, glop);
  FS.writeFileSync(fin3, glop);
  FS.writeFileSync(fin4, glop);
  FS.writeFileSync(fin5, glop);

  console.log("writting " + fin0);

  //var dir = FS.readdirSync("./data/character");
  //var item = "./data/character/" + dir[bal.idx];

  return cpy;
};
