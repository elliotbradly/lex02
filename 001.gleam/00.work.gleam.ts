import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import io from "socket.io-client";
import "reflect-metadata";

import * as FS from "fs-extra";
import * as S from "string";

var EventEmitter = require("events").EventEmitter;

import * as HarkG from "./01.glop.unit/glop.hark";
import * as HikeG from "./01.glop.unit/glop.hike";

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
  render: null,
  dex: 0,
  sml: [],
  smell: [],
};

sim.wake = (bee: Beeing) => {
  sim.bee = bee;

  var Chance = require("chance");
  var fate = new Chance();

  FS.writeFile("./data/key.txt", "beat");

  var bitData = FS.readFileSync("./data/canon/002.bit.txt")
    .toString()
    .split("\n");

  var nameData = FS.readFileSync("./data/canon/003.name.txt")
    .toString()
    .split("\n");

  var nomData = FS.readFileSync("./data/canon/004.nom.txt")
    .toString()
    .split("\n");

  var colorData = FS.readFileSync("./data/canon/005.color.txt")
    .toString()
    .split("\n");

  var colorFilter = [];
  for (var i = 0; i < 111; i++) {
    var dex = fate.integer({ min: 0, max: colorData.length });
    colorFilter.push(colorData[dex]);
  }

  var beeingData = FS.readFileSync("./data/canon/006.beeing.txt")
    .toString()
    .split("\n");

  var shapeData = FS.readFileSync("./data/canon/007.shape.txt")
    .toString()
    .split("\n");

  var patternData = FS.readFileSync("./data/canon/008.pattern.txt")
    .toString()
    .split("\n");

  var completeAvatars = [];
  var listAva = FS.readdirSync("./data/avatar");
  listAva.forEach((a) => {
    var copies = FS.readdirSync("./data/avatar/" + a);
    copies.forEach((b) => {
      var bop = "./data/avatar/" + a + "/" + b + "/ava.json";
      if (FS.existsSync(bop) == false) return;

      var ava = FS.readJsonSync(bop);
      completeAvatars.push(ava.name);
    });
  });

  var nameFin = [];

  console.log("shoes  " + completeAvatars.length);

  nameData.forEach((a) => {
    var equalCheck = 0;
    a = S(a).slugify();
    a = S(a).collapseWhitespace();
    if (a.length < 3) return;
    //console.log("a" + a);

    completeAvatars.forEach((b) => {
      // console.log("b" + b);

      b = S(b).slugify();

      b = S(b).collapseWhitespace();

      console.log("here " + b);

      //console.log(a + " :: " + b);
      if (a === b) console.log("whoot " + a);

      if (a === b) equalCheck = 1;
    });

    if (equalCheck == 1) return console.log("past " + a);
    nameFin.push(a);
  });

  bee.hike(HikeG.INDEX, B.INIT);

  bee.hike(HikeG.BIT, B.WRITE, { data: bitData });
  bee.hike(HikeG.NAME, B.WRITE, { data: nameFin });
  bee.hike(HikeG.COLOR, B.WRITE, { data: colorFilter });
  bee.hike(HikeG.BEEING, B.WRITE, { data: beeingData });
  bee.hike(HikeG.SHAPE, B.WRITE, { data: shapeData });
  bee.hike(HikeG.PATTERN, B.WRITE, { data: patternData });
  bee.hike(HikeG.NOM, B.UPDATE, { data: nomData });

  //bee.hark(HarkG.NOM_LIST, (val) => {
  // console.log("nom list changed" + val);
  //});
};

module.exports = sim;
