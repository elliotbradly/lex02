import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
var EventEmitter = require("events").EventEmitter;

import * as S from "string";

import * as HarkO from "./01.open.unit/open.hark";
import * as HikeO from "./01.open.unit/open.hike";

import * as HarkS from "./02.screen.unit/screen.hark";
import * as HikeS from "./02.screen.unit/screen.hike";
import AvaColorBit from "./00.core/interface/ava/ava.color.bit";

import * as ActO from "./01.open.unit/open.action";
import { ScreenModel } from "./02.screen.unit/screen.model";

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
  render: null,
  gleam: null,
};

sim.wake = (bee: Beeing, gleam: any) => {
  sim.bee = bee;
  sim.gleam = gleam;

  if (sim.gleam == null) return console.log("you got no gleam");

  gleam.bee.hike("glop/ava", "init");
  bee.state.dispatch({ type: ActO.WRITE_GLEAM, bale: gleam });

  var glop = gleam.bee.value.glop;

  //bee.sing(HikeO.INDEX, B.CREATE, { idx: "body" });

  bee.sing(HikeO.NAV, B.UPDATE);
  //bee.sing(HikeO.NAV, B.WRITE, { navList: glop.actionList });

  //bee.sing(HikeO.INDEX, B.CREATE, { idx: "body" });

  //bee.sing(HikeO.AVATAR, B.CREATE, {
  //  idx: "content",
  //  nameList: glop.nameList,
  //  beeingList: glop.beeingList,
  //});

  bee.hark(HarkO.NAV_DEX, navChange);
  bee.hark(HarkO.INPUT_NAME, nameChange);
  bee.hark(HarkO.INPUT_BEEING, beingChange);
  bee.hark(HarkO.CURRENT_NOM, nomChange);
  bee.hark(HarkS.NOW, contentChange);

  bee.hark(HarkS.CREATE_AVATAR, createAvatar);

  bee.hark(HarkS.AVATAR_NAME, avatarNameChange);
  bee.hark(HarkS.AVATAR_NOM, avatarNomChange);
  bee.hark(HarkS.AVATAR_COLOR, avatarColorChange);
  bee.hark(HarkS.AVATAR_BEEING, avatarBeeingChange);
  bee.hark(HarkS.AVATAR_SHAPE, avatarShapeChange);
  bee.hark(HarkS.AVATAR_PATTERN, avatarPatternChange);

  sim.gleam.bee.hark("glop.nomList", nomListChange);

  bee.hike(HikeS.CREATE, B.UPDATE, {
    nameList: glop.nameList,
    nomList: [],
    colorList: glop.colorList,
    beeingList: glop.beeingList,
    shapeList: glop.shapeList,
    patternList: glop.patternList,
  });
};

var createFormList = (val) => {
  if (val == 0) return;
  console.log("create for us an a form list");
  sim.gleam.bee.hike("glop/form", B.CREATE);
};

var createAvatar = (val) => {
  if (val == 0) return;
  console.log("create for us an avatar");
  var modS: ScreenModel = sim.bee.state.value.screen;
  var color = modS.avatarColor;
  var dom = color.split(":")[0];
  var sub = color.split(":")[1];
  var itm = sub.split(",");

  var hex = itm[0];
  var source = "";

  itm.forEach((a, b) => {
    if (b == 0) return;
    source += a;
    if (b >= itm.length - 1) return;
    source += "-";
  });

  var colorBit: AvaColorBit;
  colorBit = {
    src: S(source).slugify(),
    hex: S(hex).slugify(),
    rgb: "rgb",
    flv: S(dom).slugify(),
  };

  sim.gleam.bee.hike("glop/ava", B.CREATE, {
    nom: modS.avatarNom,
    color: JSON.stringify(colorBit),
  });
};

var avatarNameChange = (val) => {
  if (val == null) return;
  console.log("avatar name change " + val);
  sim.gleam.bee.hike("glop/ava", B.UPDATE, { name: S(val).slugify() });
  sim.gleam.bee.hike("glop/nom", B.CREATE, { idx: val });
};

var avatarNomChange = (val) => {
  if (val == null) return;
  console.log("avatar nom change " + val);
};

var avatarColorChange = (val) => {
  if (val == null) return;

  var dom = val.split(":")[0];
  dom = S(dom).slugify();

  var sub = val.split(":")[1];
  var tier = sub.split(",");

  tier.shift();

  var source = tier.join("-");

  var clr: AvaColorBit = {
    src: source,
    hex: tier[0],
    rgb: "rgb",
    flv: dom,
  };

  sim.gleam.bee.hike("glop/color", B.UPDATE, clr);

  //console.log("avatar color change " + val);

  //sim.gleam.bee.hike("glop/ava", B.UPDATE, { name: val });
};

var avatarBeeingChange = (val) => {
  if (val == null) return;
  console.log("avatar beeing change " + val);
};

var avatarShapeChange = (val) => {
  if (val == null) return;
  console.log("avatar shape change " + val);
};

var avatarPatternChange = (val) => {
  if (val == null) return;
  console.log("avatar pattern change " + val);
};

var contentChange = (val) => {
  if (val == null) return;
  //console.log("you have a content change");
};

var navChange = (val) => {
  if (val == null) return;

  switch (val) {
    case 0:
      console.log("show show");
      sim.bee.hike(HikeS.SHOW, B.READ);
      break;

    case 1:
      console.log("show edit");
      sim.bee.hike(HikeS.EDIT, B.READ);
      break;

    case 2:
      console.log("show create");
      sim.bee.hike(HikeS.CREATE, B.READ);
      break;

    case 3:
      console.log("show hunt");
      sim.bee.hike(HikeS.HUNT, B.READ);
      break;
  }
  console.log("nav change " + val);
};

var nameChange = (val) => {
  if (val == null) return;
  console.log("name changed " + val);
  sim.gleam.bee.sing("glop/name", B.CREATE, { idx: val });
};

var nomChange = (val) => {
  if (val == null) return;
  console.log("nom changed " + val);
  sim.bee.hike(HikeS.CREATE, B.READ);
};

var beingChange = (val) => {
  if (val == null) return;
  console.log("beeing changed " + val);
};

var nomListChange = (val) => {
  if (val == null) return;
  sim.bee.sing(HikeO.AVATAR, B.UPDATE, { nomList: val });
  console.log("you got a nom list change");
};

var fileDropped = (val) => {
  if (val == null) return;
  console.log("file dropped " + JSON.stringify(val));

  sim.gleam.bee.sing("glop/color", B.READ, val);
};

module.exports = sim;
